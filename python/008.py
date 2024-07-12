cidade = str(input('Nome da cidade: ')).lower().strip()

santo = "começa com Santo" if cidade[:5] == "santo" else "Não começa com Santo"

print(santo)
