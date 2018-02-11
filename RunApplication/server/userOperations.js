// Import user model
import User from '../models/userModel';

// Get all users
export const getUsers = (req, res) => {
    User
        .find()
        .exec((err, users) => {
            if (err)
                return res.status(500).send({ error: err });

            return res.send(users);
        });
};

// Add a user
export const addUser = (req, res) => {
    const newUser = new User(req.body);
    newUser.save((err, user) => {
        if (err)
            return res.status(500).send({ error: err });

        return getUsers(req, res);
    });
};

// update a user
export const updateUser = (req, res) => {
    const crit = {
        _id: req.body.id
    }

    const opts = {
        new: true,
        multi: false
    }

    User.findOneAndUpdate(
        crit,
        req.body,
        opts,
        (err, user) => {
            if (err)
                return res.status(500).send({ error: err });

            return getUsers(req, res);
        });
};

// get a user
export const getUser = (req, res) => {
    User.findById(
        req.params.id,
        (err, user) => {
            if (err)
                res.status(500).send({ error: err });

            res.send(user);
        });
};

// Delete a user
export const deleteUser = (req, res) => {
    User.findByIdAndRemove(
        req.params.id,
        (err, user) => {
            if (err)
                return res.status(500).send({ error: err });

            return getUsers(req, res);
        });
};