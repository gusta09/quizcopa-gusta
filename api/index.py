def obter_conexao():
    # O Neon salva o link do banco nesta variável: DATABASE_URL
    url_banco = os.environ.get("DATABASE_URL")
    conexao = psycopg2.connect(url_banco)
    return conexao
