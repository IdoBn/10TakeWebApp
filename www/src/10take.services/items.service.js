(function(){
	function Items(){
		this.all = [
			{
				id: 1,
				name: "item a",
				description: "meine kleine description",
				image: "http://media-cache-ec0.pinimg.com/736x/a8/78/5e/a8785ecfafe1a6bc2c1b62e581ffb258.jpg",
				user:
				{
					id: 125,
					name: "Guy Moses",
					image: "http://upload.wikimedia.org/wikipedia/commons/3/31/Mark_Zuckerberg_at_the_37th_G8_Summit_in_Deauville_018_v1.jpg"
				}
			},
			{
				id: 2,
				name: "item b",
				description: "meine kleine description",
				image: "http://carlook.net/data/db_photos/mini/cooper/1st_f/mini_cooper_1st_f_hatchback3d-3297.jpg",
				user:
				{
					id: 124,
					name: "Ido Ben-Natan",
					image: "http://upload.wikimedia.org/wikipedia/commons/3/31/Mark_Zuckerberg_at_the_37th_G8_Summit_in_Deauville_018_v1.jpg"
				}
			},
			{
				id: 3,
				name: "item c",
				description: "meine kleine description",
				image: "http://site.englishtealeaves.com/blog/images/british-flag-tea-pot-large.jpg",
				user:
				{
					id: 125,
					name: "Guy Moses",
					image: "http://upload.wikimedia.org/wikipedia/commons/3/31/Mark_Zuckerberg_at_the_37th_G8_Summit_in_Deauville_018_v1.jpg"
				}
			},
			{
				id: 4,
				name: "item d",
				description: "meine kleine description",
				image: "http://www.mapleuk.co.uk/ekmps/shops/mapleuk/images/apple-macbook-pro-13.3-x22-intel-core-2-duo-2.66ghz-laptop-mc375b-a-[2]-245-p.jpg",
				user:
				{
					id: 125,
					name: "Ido Ben-Natan",
					image: "http://upload.wikimedia.org/wikipedia/commons/3/31/Mark_Zuckerberg_at_the_37th_G8_Summit_in_Deauville_018_v1.jpg"
				}
			},
			{
				id: 5,
				name: "item e",
				description: "meine kleine description",
				image: "http://www.shredbetties.com/images/uploads/boardtest/burton_troop.jpg",
				user:
				{
					id: 125,
					name: "Guy Moses",
					image: "http://upload.wikimedia.org/wikipedia/commons/3/31/Mark_Zuckerberg_at_the_37th_G8_Summit_in_Deauville_018_v1.jpg"
				}
			},
			{
				id: 6,
				name: "item f",
				description: "meine kleine description",
				image: "http://www.drlisawatson.com/wp-content/uploads/2011/10/teabags.jpg",
				user:
				{
					id: 125,
					name: "Guy Moses",
					image: "http://upload.wikimedia.org/wikipedia/commons/3/31/Mark_Zuckerberg_at_the_37th_G8_Summit_in_Deauville_018_v1.jpg"
				}
			},
			{
				id: 7,
				name: "item g",
				description: "meine kleine description",
				image: "http://www.collinbox.com/images/boxes.jpg",
				user:
				{
					id: 125,
					name: "Guy Moses",
					image: "http://upload.wikimedia.org/wikipedia/commons/3/31/Mark_Zuckerberg_at_the_37th_G8_Summit_in_Deauville_018_v1.jpg"
				}
			},
			{
				id: 8,
				name: "item h",
				description: "meine kleine description",
				image: "http://stylonica.com/wp-content/uploads/2014/03/Cute-Cats-cats-33440930-1280-800.jpg",
				user:
				{
					id: 125,
					name: "Guy Moses",
					image: "http://upload.wikimedia.org/wikipedia/commons/3/31/Mark_Zuckerberg_at_the_37th_G8_Summit_in_Deauville_018_v1.jpg"
				}
			},
			{
				id: 9,
				name: "item i",
				description: "meine kleine description",
				image: "http://www.demenagementpiano.ca/img/piano.png",
				user:
				{
					id: 125,
					name: "Guy Moses",
					image: "http://upload.wikimedia.org/wikipedia/commons/3/31/Mark_Zuckerberg_at_the_37th_G8_Summit_in_Deauville_018_v1.jpg"
				}
			}
		];
	}

	angular.module('10take.services')
		.service('ItemsService',Items)
}());