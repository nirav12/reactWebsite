import jwt from 'jsonwebtoken';

function generateToken(user){

	var u = {
		name: user.name,
		username: user.username,
		admin: user.admin,
		_id: user._id.toString(),
		image:user.image
	};

	return token = jwt.sign(u, process.env.JWT_SECRET,{
		expiresIn: 60 *24 *24
	});

}