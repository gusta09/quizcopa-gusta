from flask import Flask, jsonify, request
import psycopg2
import os
import json

# A VERCEL PRECISA DESTA LINHA EXATAMENTE ASSIM, SEM ESPAÇOS ANTES:
app = Flask(__name__)

# -----------------------------------------
# Função para conectar ao banco de dados Neon
# -----------------------------------------
def obter_conexao():
    url_banco = os.environ.get("DATABASE_URL")
    conexao = psycopg2.connect(url_banco)
    return conexao

# -----------------------------------------
# Rota 1: Enviar as perguntas do banco.json para o HTML
# -----------------------------------------
@app.route('/api/perguntas', methods=['GET'])
def obter_perguntas():
    try:
        # Pega o caminho exato onde o JSON está salvo
        caminho_arquivo = os.path.join(os.path.dirname(__file__), 'banco.json')
        
        with open(caminho_arquivo, 'r', encoding='utf-8') as arquivo:
            dados = json.load(arquivo)
            
        return jsonify(dados)
    except Exception as e:
        return jsonify({"erro": f"Erro ao carregar perguntas: {str(e)}"}), 500

# -----------------------------------------
# Rota 2: Salvar a pontuação no banco de dados
# -----------------------------------------
@app.route('/api/salvar_pontuacao', methods=['POST'])
def salvar_pontuacao():
    dados = request.get_json()
    nome = dados.get('usuario')
    pontos = dados.get('pontuacao')

    if not nome or pontos is None:
        return jsonify({"erro": "Nome ou pontuação faltando"}), 400

    try:
        conexao = obter_conexao()
        cursor = conexao.cursor()
        
        # Insere os dados na tabela ranking
        comando_sql = "INSERT INTO ranking (nome, pontuacao) VALUES (%s, %s)"
        cursor.execute(comando_sql, (nome, pontos))
        
        conexao.commit()
        cursor.close()
        conexao.close()

        return jsonify({"status": "sucesso", "mensagem": "Pontuação salva com sucesso!"})
    except Exception as e:
        return jsonify({"erro": str(e)}), 500

# -----------------------------------------
# Rota 3: Buscar o Top 10 (Ranking Global)
# -----------------------------------------
@app.route('/api/ranking', methods=['GET'])
def buscar_ranking():
    try:
        conexao = obter_conexao()
        cursor = conexao.cursor()
        
        # Busca os 10 melhores, ordenando do maior para o menor
        comando_sql = "SELECT nome, pontuacao FROM ranking ORDER BY pontuacao DESC LIMIT 10"
        cursor.execute(comando_sql)
        
        resultados = cursor.fetchall()
        
        cursor.close()
        conexao.close()

        # Formata os resultados para o formato JSON que o JavaScript entende
        lista_ranking = [{"nome": linha[0], "pontuacao": linha[1]} for linha in resultados]
        
        return jsonify(lista_ranking)
    except Exception as e:
        return jsonify({"erro": str(e)}), 500
