from backend import create_app

app = create_app()

## entry point
if __name__ == "__main__":
    app.run(debug=True)
