# Drops Back-end

## Description
The name of this project is 'Drops' 

## Using Drops JSON Data

### Routes
#### Signup
`https://dropsproject.herokuapp.com/users/signup`

- used handle user signup
- see below
```
router.post('/signup', (req,res) => {
    // if there is a email and passord set values
    if(req.body.email && req.body.password){
        let newUser = {
            email: req.body.email,
            password: req.body.password
        }
        User.findOne({email: req.body.email})
        .then((user) => {
            //if user doesn't exist create a new user
            if(!user) {
                User.create(newUser)
                .then(user => {
                    if(user) {
                        var payload = {
                            id: newUser.id
                        }
                        var token = jwt.encode(payload, config.jwtSecret)
                        res.json({
                            token: token
                        })
                    } else{
                        res.sendStatus(401)
                    }
                })
            } else {
                res.sendStatus(401)
            }
        })
    } else {
        res.sendStatus(401)
    }
})
```
#### Login
`https://dropsproject.herokuapp.com/users/login`

- handle user login
- see snippet below:
```
router.post('/login', (req, res) => {
    if (req.body.email && req.body.password) {
      User.findOne({ email: req.body.email }).then(user => {
        if (user) {
          if (user.password === req.body.password) {
            var payload = {
              id: user.id
            }
            var token = jwt.encode(payload, config.jwtSecret)
            res.json({
              token: token
            })
          } else {
            res.sendStatus(401)
          }
        } else {
          res.sendStatus(401)
        }
      })
    } else {
      res.sendStatus(401)
    }
  })
```
#### Clothing Routes
- list all clothing items: 
`https://dropsproject.herokuapp.com/api/clothing`
- find clothing by item name:
`https://dropsproject.herokuapp.com/api/clothing/name/:SpeccifiedItemName`
- find clothing by brand name:
`https://dropsproject.herokuapp.com/api/clothing/brand/:SpeccifiedBrandName`
- find clothing by type:
`https://dropsproject.herokuapp.com/api/clothing/type/:ITEMTYPE`
- create new clothing item:
```
router.post('/', clothing.addItem)
  addItem: (req, res) => {
    clothing.create(req.body).then(newClothing => res.json(newClothing));
  }
```
- update clothing item status
```
 updateSoldout: (req, res) => {
    let name = req.params.name;
    clothing.updateOne({ "name": name }, req.body).then(results => {
      res.json(results);
    });
  }

router.put('/update/:name', clothing.updateSoldout)


```

- delete clothing item
```
router.delete('/:name', clothing.deleteItem)

  deleteItem: (req, res) => {
    let name = req.params.name;
    clothing.findOneAndDelete({ name: name }).then(results => {
      res.json(results);
    });
  }

```

#### News Routes
- list all news
`https://dropsproject.herokuapp.com/api/news`
- list news item by title
`https://dropsproject.herokuapp.com/api/news/title/:NewsArticleTitle`




## Features
- User signup, login/logout capabilities
- User favorites display
- Redirect links for purchasing
- News feed
- User favorites
- Personal feed based upon favorited items

## Languages Used
- MERN(MongoDB, Express, React, Node.js) stack
- React MDL

## Installation
- Fork & Clone this repository
- `npm install` all neccessary dependencies
- Recommend using Postman for testing back-end functionality

## Contribute
- Submit an [issue](https://github.com/frederickbanks/Project-3-Backend/issues) here to contiribute to this project.
- To submit updates/improvements fork and clone this repository [here](https://github.com/frederickbanks/Project-3-Backend)
