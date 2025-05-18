const usersDb = [];

// Mock User model (replace with your actual model as needed)
class User {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
}

const UserController = {
  getUsers: (req, res) => {
    res.json(usersDb);
  },

  getUser: (req, res) => {
    const userId = parseInt(req.params.id, 10);
    const user = usersDb.find((u) => u.id === userId);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  },

  createUser: (req, res) => {
    const { id, name, email } = req.body;
    const user = new User(id, name, email);
    usersDb.push(user);
    res.status(201).json(user);
  },
};

export default UserController;
