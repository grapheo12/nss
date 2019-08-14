All SQLAlchemy Models will be defined here.


# Table

### User

```
id INT PRIMARY_KEY
email STRING UNIQUE
password STRING
role INT
```


# Model Creation Guidelines

Each model should go in a separate file dedicated to it.
Filename should be in plural and lowercase.
Class Name should be Singular and start from UpperCase.
Junction tables bearing the name `(x)(y)Junction` should go to `(x)s.py` file.


