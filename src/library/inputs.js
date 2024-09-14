import Category from "./constants";

export const Fields = {
    "name": {
        "id": "username",
        "name": "name",
        "type": "text",
        "value": "",
        "placeholder": "Enter your name",
        "required": true,
        "label": "Name",
    },
    "email": {
        "id": "email",
        "name": "email",
        "type": "email",
        "value": "",
        "placeholder": "Enter your email",
        "required": true,
        "label": "Email",
    },
    "password": {
        "id": "password",
        "name": "password",
        "type": "password",
        "value": "",
        "placeholder": "Enter password",
        "required": true,
        "label": "Password"
    },
    "reset_password": {
        "id": "reset_password",
        "name": "reset_password",
        "type": "reset_password",
        "value": "",
        "placeholder": "Enter new password",
        "required": true,
        "label": "Reset password"
    },
    "phone": {
        "id": "phone",
        "name": "phone",
        "type": "number",
        "value": "",
        "placeholder": "Enter phone number",
        "required": true,
        "label": "Phone"
    },
    "address": {
        "id": "address",
        "name": "address",
        "type": "text",
        "value": "",
        "placeholder": "Address",
        "required": true,
        "label": "Address"
    },
    "message": {
        "id": "message",
        "name": "message",
        "type": "text",
        "value": "",
        "placeholder": "Enter your message",
        "required": true,
        "label": "Message"
    },
    "otp_verify": {
        "id": "otp_verify",
        "name": "otp_verify",
        "type": "text",
        "value": "",
        "placeholder": "Enter otp",
        "required": true,
        "label": "Otp verify"
    },

    "email_phone": {
        "id": "email_phone",
        "name": "email_phone",
        "type": "text",
        "value": "",
        "placeholder": "Enter email or phone",
        "required": true,
        "label": "Email or phone"
    },

    "title": {
        "id": "title",
        "name": "title",
        "type": "text",
        "value": "",
        "placeholder": "Enter title",
        "required": true,
        "label": "Title"
    },
    "tags": {
        "id": "tags",
        "name": "tags",
        "type": "text",
        "value": "",
        "placeholder": "Enter your tags",
        "required": true,
        "label": "Tags seprated by comma (,)"
    },

    "author": {
        "id": "author",
        "name": "author",
        "type": "text",
        "value": "",
        "placeholder": "Enter author name",
        "required": true,
        "label": "Author"
    },

    "description": {
        "id": "description",
        "name": "description",
        "type": "text",
        "value": "",
        "placeholder": "Description",
        "required": true,
        "label": "Description"
    },

    "question": {
        "id": "question",
        "name": "question",
        "type": "text",
        "value": "",
        "placeholder": "Question",
        "required": true,
        "label": "Question"
    },

    "answer": {
        "id": "answer",
        "name": "answer",
        "type": "text",
        "value": "",
        "placeholder": "Answer",
        "required": true,
        "label": "Answer"
    },
    "subject": {
        "id": "subject",
        "name": "subject",
        "type": "text",
        "value": "",
        "placeholder": "Subject",
        "required": true,
        "label": "Subject"
    },
    "price": {
        "id": "price",
        "name": "price",
        "type": "number",
        "value": "",
        "placeholder": "Enter your price",
        "required": true,
        "label": "Price",
    },

    "project_category": {
        "id": "category",
        "name": "category",
        "type": "text",
        "value": "",
        "placeholder": "Enter category",
        "required": true,
        "label": "Category",
        "options": [...Category.ProjectsCategory]
    },

    "for_sale": {
        "id": "for_sale",
        "name": "for_sale",
        "type": "text",
        "value": "",
        "placeholder": "For sale",
        "required": true,
        "label": "For sale",
        "options": [...Category.PaidTypes]
    },

    "image": {
        "id": "image",
        "name": "image",
        "type": "file",
        "value": "",
        "placeholder": "image",
        "required": true,
        "label": "Image",
    },

    "file_url": {
        "id": "file_url",
        "name": "file_url",
        "type": "text",
        "value": "",
        "placeholder": "File url",
        "required": true,
        "label": "File url",
    },

    "course": {
        "id": "course",
        "name": "course",
        "type": "text",
        "value": "",
        "placeholder": "Course",
        "required": true,
        "label": "Course",
        "options": [...Category.AccessOnly]
    },

    "category": {
        "id": "category",
        "name": "category",
        "type": "text",
        "value": "",
        "placeholder": "Category",
        "required": true,
        "label": "Category",
        "options": [...Category.LanguagesCategory]
    },

    "sub_category": {
        "id": "sub_category",
        "name": "sub_category",
        "type": "text",
        "value": "",
        "placeholder": "Sub Category",
        "required": true,
        "label": "Sub Category",
        "options": [...Category.LanguagesSubCategory]
    },

    "paid": {
        "id": "paid",
        "name": "paid",
        "type": "text",
        "value": "",
        "placeholder": "Paid",
        "required": true,
        "label": "Paid",
        "options": [...Category.PaidTypes]
    },

    "access_only": {
        "id": "access_only",
        "name": "access_only",
        "type": "text",
        "value": "",
        "placeholder": "You can access only javascript course",
        "required": true,
        "label": "Access Only",
        "options": [...Category.AccessOnly]
    },

    "access_days": {
        "id": "access_days",
        "name": "access_days",
        "type": "number",
        "value": "",
        "placeholder": "You can access only 30 days",
        "required": true,
        "label": "Access Days",
        "options": [...Category.AccessDays]
    },

    "access_type": {
        "id": "access_type",
        "name": "access_type",
        "type": "text",
        "value": "",
        "placeholder": "Access type",
        "required": true,
        "label": "Access type",
        "options": [...Category.AccessTypes]
    },

    "points": {
        "id": "points",
        "name": "points",
        "type": "text",
        "value": "",
        "placeholder": "Points",
        "required": true,
        "label": "Points & Saperated by comma (,)",
    },
    "offer": {
        "id": "offer",
        "name": "offer",
        "type": "number",
        "value": "",
        "placeholder": "Offer",
        "required": true,
        "label": "Offer in %",
    },
    "mrp": {
        "id": "mrp",
        "name": "mrp",
        "type": "number",
        "value": "",
        "placeholder": "M.R.P",
        "required": true,
        "label": "M.R.P (number)"
    },
};


export const InputFields = {
    "user_register_form": [Fields.name, Fields.email, Fields.phone, Fields.password],
    "user_login_form": [Fields.email_phone, Fields.password],
    "forgot_password_form": [Fields.email],
    "reset_password_form": [Fields.password, Fields.reset_password],
    "contact_us_form": [Fields.name, Fields.email, Fields.phone, Fields.message],

    "new_blog_form": [Fields.title, Fields.author, Fields.tags],
    "question_form": [Fields.title, Fields.tags, Fields.author],
};