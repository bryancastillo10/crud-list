# CRUD App
from flask import request, jsonify
from config import app, db
from models import Contact

# Create Method
@app.route("/create-contacts",methods=["POST"])
def create_contact():
    first_name = request.json.get("firstName")
    last_name = request.json.get("lastName")
    email = request.json.get("email")

    if not first_name or not last_name or not email:
        return (
                jsonify({"message":"You must include a first name, last name, and email"}),400
                )

    new_contact = Contact(first_name= first_name, last_name=last_name, email=email)
    try:
        db.session.add(new_contact)
        db.session.commit()
    except Exception as e:
        return jsonify({"message":str(e)}),400

    return jsonify({"message": "User has been created!"}),200

# Read Method
@app.route("/contacts",methods=["GET"])
def get_contact():
    contacts = Contact.query.all()
    json_contacts = list(map(lambda x: x.to_json(), contacts))
    return jsonify({"contacts":json_contacts})


# Update Method
@app.route("/update_contact/<int:user_id>", methods=["PATCH"])
def update_contact(user_id):
    contact = Contact.query.get(user_id)

    if not contact:
        return jsonify({"message":"User is not found"}),404
    
    data = request.json
    contact.first_name = data.get("firstName",contact.first_name)
    contact.last_name = data.get("lastName",contact.last_name)
    contact.email = data.get("email",contact.email)

    db.session.commit()
    return jsonify({"message":"User just updated"}), 200

# Delete Method
@app.route("/delete_contact/<int:user_id>",methods=["DELETE"])
def delete_contact(user_id):
    contact = Contact.query.get(user_id)

    if not contact:
        return jsonify({"message": "User is not found"}),404
    
    db.session.delete(contact)
    db.session.commit()
    return jsonify({"message":"User has been deleted"}),200


if __name__ == "__main__":
    # Creating the database at first instance or if it doesn't exist
    with app.app_context():
        db.create_all()

    # Running of the app
    app.run(debug=True)