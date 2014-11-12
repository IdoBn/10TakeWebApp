(function(){
	function Users(){
		this.all = [
			{
				id: 1,
				email: "mosesguy@gmail.com",
				name: "Guy Moses",
				nickname: null,
				image: "http://tctechcrunch2011.files.wordpress.com/2012/09/mark.jpeg",
				provider: "email",
				uid: "mosesguy@gmail.com",
				created_at: "2014-11-11T18:22:03.461Z",
				updated_at: "2014-11-12T15:02:59.479Z",
				items:[ 
					{
						id: 1,
						name: "item a",
						description: "meine kleine description",
						image: "http://media-cache-ec0.pinimg.com/736x/a8/78/5e/a8785ecfafe1a6bc2c1b62e581ffb258.jpg"
					}
				]
			},
			{
				id: 2,
				email: "mosesguy@gmail.com",
				name: "Guy Moses",
				nickname: null,
				image: "http://tctechcrunch2011.files.wordpress.com/2012/09/mark.jpeg",
				provider: "email",
				uid: "mosesguy@gmail.com",
				created_at: "2014-11-11T18:22:03.461Z",
				updated_at: "2014-11-12T15:02:59.479Z",
				items:[
					{
						id: 1,
						name: "item a",
						description: "meine kleine description",
						image: "http://media-cache-ec0.pinimg.com/736x/a8/78/5e/a8785ecfafe1a6bc2c1b62e581ffb258.jpg"
					},
					{
						id: 2,
						name: "item b",
						description: "meine kleine description",
						image: "http://www.shredbetties.com/images/uploads/boardtest/burton_troop.jpg"
					},
					{
						id: 3,
						name: "item c",
						description: "meine kleine description",
						image: "http://www.mapleuk.co.uk/ekmps/shops/mapleuk/images/apple-macbook-pro-13.3-x22-intel-core-2-duo-2.66ghz-laptop-mc375b-a-[2]-245-p.jpg"
					},
					{
						id: 4,
						name: "item c",
						description: "meine kleine description",
						image: "http://www.mapleuk.co.uk/ekmps/shops/mapleuk/images/apple-macbook-pro-13.3-x22-intel-core-2-duo-2.66ghz-laptop-mc375b-a-[2]-245-p.jpg"
					},
					{
						id: 5,
						name: "item c",
						description: "meine kleine description",
						image: "http://stylonica.com/wp-content/uploads/2014/03/Cute-Cats-cats-33440930-1280-800.jpg"
					},
					{
						id: 6,
						name: "item c",
						description: "meine kleine description",
						image: "http://cnet2.cbsistatic.com/hub/i/r/2014/07/18/9a7a90dd-15c2-40d6-bd44-76ceab798801/resize/770x578/bcd13043b445b6155443b4cef64bc38c/large-hero-iphone-6-04-cd.jpg"
					}
				]
			}
		];
	}

	angular.module('10take.services')
		.service('UsersService',Users)
}());