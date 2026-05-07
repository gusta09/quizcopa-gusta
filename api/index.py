from flask import Flask, jsonify, request
import psycopg2
import os

# A VERCEL PRECISA DESTA LINHA EXATAMENTE ASSIM, SEM ESPAÇOS ANTES:
app = Flask(__name__)

def obter_conexao():
    url_banco = os.environ.get("DATABASE_URL")
    conexao = psycopg2.connect(url_banco)
    return conexao

@app.route('/api/salvar_pontuacao', methods=['POST'])
def salvar_pontuacao():
    # ... resto do seu código ...
