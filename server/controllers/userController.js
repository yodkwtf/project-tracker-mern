/**
 * @desc    Register New User
 * @route   POST /api/v1/user/register
 * @access  Public
 */
const registerUser = async (req, res) => {
  res.send('Register User');
};

/**
 * @desc    Login User
 * @route   POST /api/v1/user/login
 * @access  Public
 */
const loginUser = async (req, res) => {
  res.send('Login User');
};

/**
 * @desc    Update User
 * @route   PATCH /api/v1/user/update
 * @access  Private
 */
const updateUser = async (req, res) => {
  res.send('Update User');
};

export { registerUser, loginUser, updateUser };
