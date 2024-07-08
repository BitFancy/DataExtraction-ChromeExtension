from flask import Flask, jsonify, request
from flask_cors import CORS
from openai import OpenAI
from dotenv import load_dotenv
import json
import os

load_dotenv()

OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
client = OpenAI(api_key=OPENAI_API_KEY)

app = Flask(__name__)
CORS(app)

@app.route('/get-fulltext', methods=['POST'])
def run_script():
    data = request.get_json()
    if data:
        print(f'Received data : {data}')

        with open("text.json", 'w') as file:
            json.dump(data, file, indent=4)

        prompt = data['text']
        gpt_response = function_calling(prompt)
        print(gpt_response)

        with open('gpt_response.txt', 'a') as text:
            text.write('Prompt' + prompt + '\n' + 'Extrated data' + gpt_response + '\n')

        response = {
            "status": "success",
            "message": "Data received successfully!"
        }

        return jsonify(response), 200
    else:
        response = {
            "status": "failure",
            "message": "No data received"
        }
        return jsonify(response), 400
    
def function_calling(prompt):
    extract_info = [
        {
            "type": "function",
            "function": {
                "name": "extracte_info",
                "description": "extract the essetial information from given text.",
                "parameters": {
                    "type": "object",
                    "properties": {
                        "name": {
                            "type": "string",
                            "description": "Extract the name of the podcast guest themeselves. I don't need no one else and other description. Output is only name."
                        },
                        "company": {
                            "type": "string",
                            "description": "Extract the company name of the podcast guest themeselves. I don't need no one else and other description. Output is only company name."
                        },
                    },
                    "required": ["name", "company"]
                }
            }
        }
    ]

    messages = [
        {"role": "system", "content": "Please extract the essential information from the data that is inputted by user. You should answer in all of question."},
        {"role": "user", "content": prompt}
        ]

    response = client.chat.completions.create(
        model="gpt-4-1106-preview",
        messages=messages,
        temperature=0,
        tools=extract_info,
    )

    return response.choices[0].message.tool_calls[0].function.arguments


if __name__ == "__main__":
    app.run(port=5002, debug=True)