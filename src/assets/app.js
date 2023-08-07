
/*** TODO's
* Move `tool` inside each `recipe`
* Add `fragmentlocations` to relavant `item`s
* (?) Add a map view
* Add folding to `items` view structure, each group defaults to folded
* SVG title graphic
* Better name
* Prevent adding an item multiple times, or make it increase multiplier of existing list item
***/

/*** VUE ***/
let vue = new Vue({
	el: '#app',
	data: {
		groups: [
			{
				name: "Flora & Seeds",
				description: "",
				items: [
					{
						name: "Acid Mushroom",
						location: "Crash Zone, Grassy Plateaus, Grassy Plateaus Caves, Lost River, Mushroom Forest, Reefback, Safe Shallows, Safe Shallows Caves"
					},
					{
						name: "Acid Mushroom Spore",
						location: "Crash Zone, Grassy Plateaus, Grassy Plateaus Caves, Lost River, Mushroom Forest, Reefback, Safe Shallows, Safe Shallows Caves"
					},
					{
						name: "Blood Oil",
						location: "Blood Kelp Caves, Blood Kelp Zone"
					},
					{
						name: "Blue Palm Seed",
						location: "Bulb Zone, Mushroom Forest, Mountains Caves, Safe Shallows"
					},
					{
						name: "Brain Coral Sample",
						location: "Bulb Zone, Grassy Plateaus, Kelp Forest, Mountains, Mushroom Forest, Safe Shallows"
					},
					{
						name: "Bulb Bush Sample",
						location: "Bulb Zone"
					},
					{
						name: "Bulbo Tree Sample",
						location: "Floating Island, Mountain Island"
					},
					{
						name: "Cave Bush Seed",
						location: "Jellyshroom Cave, Mountains Caves, Sea Treader's Path, Sea Treader's Tunnel Caves"
					},
					{
						name: "Chinese Potato",
						location: "Floating Island"
					},
					{
						name: "Coral Tube Sample",
						location: "Grand Reef, Sea Treader's Path, Sea Treader's Tunnel Caves"
					},
					{
						name: "Creepvine Sample",
						location: "Kelp Forest"
					},
					{
						name: "Creepvine Seed Cluster",
						location: "Kelp Forest"
					},
					{
						name: "Deep Shroom",
						location: "Blood Kelp Zone, Sea Treader's Path, Sea Treader's Tunnel Caves"
					},
					{
						name: "Deep Shroom Spore",
						location: "Blood Kelp Zone, Sea Treader's Path, Sea Treader's Tunnel Caves"
					},
					{
						name: "Eye Stalk Seed",
						location: "Bulb Zone Caves, Kelp Forest Caves, Mountains Caves, Sparse Reef"
					},
					{
						name: "Fern Palm Seed",
						location: "Floating Island"
					},
					{
						name: "Fungal Sample",
						location: "Grand Reef, Sea Treader's Path, Sea Treader's Tunnel Caves"
					},
					{
						name: "Furled Papyrus Seed",
						location: "Grassy Plateaus, Grassy Plateaus Caves, Jellyshroom Cave, Mountains Caves, Reefback, Sea Treader's Tunnel Caves"
					},
					{
						name: "Gabe's Feather Seed",
						location: "Blood Kelp Zone, Sea Treader's Path, Sea Treader's Tunnel Caves"
					},
					{
						name: "Gel Sack",
						location: "Grand Reef, Sea Treader's Path, Sea Treader's Tunnel Caves"
					},
					{
						name: "Ghost Weed Seed",
						location: "Blood Kelp Zone, Bulb Zone, Lost River, Mountains"
					},
					{
						name: "Grub Basket Seed",
						location: "Floating Island"
					},
					{
						name: "Jaffa Cup Seed",
						location: "Floating Island"
					},
					{
						name: "Jellyshroom Spore",
						location: "Jellyshroom Cave"
					},
					{
						name: "Lantern Fruit",
						location: "Floating Island"
					},
					{
						name: "Marblemelon",
						location: "Floating Island"
					},
					{
						name: "Marblemelon Seeds",
						location: "Grand Reef, Sea Treader's Path"
					},
					{
						name: "Membrain Tree Seed",
						location: "Floating Island"
					},
					{
						name: "Ming Plant Seed",
						location: "Floating Island"
					},
					{
						name: "Pink Cap",
						location: "Floating Island"
					},
					{
						name: "Pink Cap Spore",
						location: "Floating Island"
					},
					{
						name: "Pygmy Fan Seed",
						location: "Bulb Zone, Kelp Forest, Mushroom Forest"
					},
					{
						name: "Redwort Seed",
						location: "Grassy Plateaus, Jellyshroom Cave, Sparse Reef, Underwater Islands"
					},
					{
						name: "Regress Shell Seed",
						location: "Grassy Plateaus Caves, Mountains Caves, Reefback, Sea Treader's Tunnel Caves"
					},
					{
						name: "Rouge Cradle Seed",
						location: "Grassy Plateaus, Grassy Plateaus Caves, Reefback"
					},
					{
						name: "Sea Crown Seed",
						location: "Bulb Zone, Dunes, Dunes Caves, Grassy Plateaus Caves"
					},
					{
						name: "Small Marblemelon",
						location: "Floating Island"
					},
					{
						name: "Speckled Rattler",
						location: "Floating Island"
					},
					{
						name: "Speckled Rattler Spore",
						location: "Floating Island"
					},
					{
						name: "Spiked Horn Grass Seed",
						location: "Bulb Zone Caves, Sea Treader's Path"
					},
					{
						name: "Spotted Dockleaf Seed",
						location: "Bulb Zone, Bulb Zone Caves, Mountains Caves, Underwater Islands"
					},
					{
						name: "Tiger Plant Seed",
						location: "Grassy Plateaus, Grassy Plateaus Caves, Reefback, Sparse Reef"
					},
					{
						name: "Table Coral Sample",
						location: "Bulb Zone, Crash Zone, Crash Zone Mesas, Grassy Plateaus, Kelp Forest, Kelp Forest Caves, Lost River, Mushroom Forest, Reefback Leviathan, Safe Shallows"
					},
					{
						name: "Veined Nettle Seed",
						location: "Grassy Plateaus, Mushroom Forest, Reefback, Safe Shallows, Safe Shallows Caves"
					},
					{
						name: "Violet Beau Seed",
						location: "Grassy Plateaus, Jellyshroom Cave, Mountains Caves, Reefback, Sea Treader's Path"
					},
					{
						name: "Voxel Shrub Seed",
						location: "Floating Island"
					},
					{
						name: "Writhing Weed Seed",
						location: "Bulb Zone, Grassy Plateaus, Mushroom Forest, Mushroom Forest Caves, Reefback, Safe Shallows, Safe Shallows Caves"
					}
				]
			},
			{
				name: "Raw Materials",
				description: "Raw Materials are items for crafting processes and comprise all non-crafted materials found in Subnautica, one exception being Titanium, which can also be crafted from Metal Salvage.",
				tool: "",
				items: [
					{
						name: "Alien Feces",
						location: "Grand Reef, Sea Treader's Path, Sea Treader's Tunnel Caves"
					},
					{
						name: "Cave Sulfur",
						location: "Kelp Forest Caves, Safe Shallows Caves"
					},
					{
						name: "Copper",
						location: "Grassy Plateaus, Kelp Forest, Kelp Forest Caves, Reefback, Safe Shallows, Safe Shallows Caves, Sparse Reef, Underwater Islands"
					},
					{
						name: "Crystalline Sulfur",
						location: "Inactive Lava Zone, Lava Lakes, Lost River"
					},
					{
						name: "Diamond",
						location: "Blood Kelp Caves, Bulb Zone, Deep Grand Reef, Grand Reef, Inactive Lava Zone, Mountains, Mountains Caves, Underwater Islands"
					},
					{
						name: "Gas Pod",
						location: "Crash Zone Mesas, Dunes, Safe Shallows"
					},
					{
						name: "Gold",
						location: "Blood Kelp Caves, Bulb Zone, Bulb Zone Caves, Crash Zone, Deep Grand Reef, Dunes, Grand Reef, Grassy Plateaus, Jellyshroom Cave, Mushroom Forest, Safe Shallows Caves, Underwater Islands"
					},
					{
						name: "Ion Cube",
						location: "Grand Reef, Sea Treader's Path, Sea Treader's Tunnel Caves"
					},
					{
						name: "Kyanite",
						location: "Inactive Lava Zone, Lava Castle, Lava Lakes"
					},
					{
						name: "Lead",
						location: "Bulb Zone, Crash Zone, Crash Zone Mesas, Dunes, Dunes Caves, Grand Reef, Grassy Plateaus, Kelp Forest, Kelp Forest Caves, Lava Geyser, Mountains, Mountain Island, Mushroom Forest, Safe Shallows, Safe Shallows Caves"
					},
					{
						name: "Lithium",
						location: "Bulb Zone, Bulb Zone Caves, Crag Field, Crash Zone, Dunes, Dunes Caves, Floating Island, Grassy Plateaus, Jellyshroom Cave, Mountain Island, Mountains, Mountains Caves, Mushroom Forest, Mushroom Forest Caves, Sea Treader's Path, Sparse Reef"
					},
					{
						name: "Magnetite",
						location: "Jellyshroom Cave, Mountain Island, Mountains, Mountains Caves"
					},
					{
						name: "Metal Salvage",
						location: "Aurora, Blood Kelp Zone, Crash Zone, Dunes, Grassy Plateaus, Kelp Forest, Safe Shallows"
					},
					{
						name: "Nickel Ore",
						location: "Lost River"
					},
					{
						name: "Quartz",
						location: "Blood Kelp Caves, Blood Kelp Zone, Crash Zone, Dunes, Grand Reef, Grassy Plateaus, Kelp Forest, Safe Shallows, Safe Shallows Caves, Sea Treader's Path, Sea Treader's Tunnel Caves"
					},
					{
						name: "Ruby",
						location: "Bone Fields Caves, Bulb Zone, Deep Grand Reef, Deep Sparse Reef, Grand Reef, Inactive Lava Zone Corridor, Lost River, Mountains Caves, Sea Treader's Path, Sea Treader's Tunnel Caves"
					},
					{
						name: "Salt Deposit",
						location: "Aurora, Bulb Zone, Crash Zone, Deep Grand Reef, Floating Island, Grassy Plateaus, Kelp Forest, Mushroom Forest, Safe Shallows, Sparse Reef, Underwater Islands"
					},
					{
						name: "Silver Ore",
						location: "Dunes, Grassy Plateaus, Kelp Forest, Kelp Forest Caves, Reefback, Safe Shallows Caves"
					},
					{
						name: "Stalker Tooth",
						location: "Kelp Forest"
					},
					{
						name: "Titanium",
						location: "Grand Reef, Sea Treader's Path, Sea Treader's Tunnel Caves",
						recipe: {
							ingredients: [
								{
									name: "Metal Salvage",
									quantity: 1
								}
							],
							yield: 4
						}
					},
					{
						name: "Uraninite Crystal",
						location: "Blood Kelp Zone, Grand Reef, Lost River, Mountains"
					}
				]
			},
			{
				name: "Basic Materials",
				description: "Basic Materials are part of the resources branch of the Fabricator, along with Electronics. They are gained from Raw Materials through crafting.",
				tool: "Fabricator",
				items: [
					{
						name: "Bleach",
						recipe: {
							ingredients: [
								{
									name: "Salt Deposit",
									quantity: 1
								},
								{
									name: "Coral Tube Sample",
									quantity: 1
								}
							],
							yield: 1
						}
					},
					{
						name: "Enameled Glass",
						recipe: {
							ingredients: [
								{
									name: "Glass",
									quantity: 1
								},
								{
									name: "Stalker Tooth",
									quantity: 1
								}
							],
							yield : 1
						}	
					},
					{
						name: "Fiber Mesh",
						recipe: {
							ingredients: [
								{
									name: "Creepvine Sample",
									quantity: 2
								}
							],
							yield: 1
						}
					},
					{
						name: "Glass",
						recipe: {
							ingredients: [
								{
								name: "Quartz",
								quantity: 2
								}
							],
							yield: 1
						}
					},
					{
						name: "Lubricant",
						recipe: {
							ingredients: [
								{
									name: "Creepvine Seed Cluster",
									quantity: 1
								}
							],
							yield: 1
						}
					},
					{
						name: "Plasteel Ingot",
						recipe: {
							ingredients: [
								{
									name: "Titanium Ingot",
									quantity: 1
								},
								{
									name: "Lithium",
									quantity: 2
								}
							],
							yield: 1
						}
					},
					{
						name: "Silicone Rubber",
						recipe: {
							ingredients: [
								{
									name: "Creepvine Seed Cluster",
									quantity: 1
								}
							],
							yield: 2
						}
					},
					{
						name: "Titanium Ingot",
						recipe: {
							ingredients: [
								{
									name: "Titanium",
									quantity: 10
								}
							],
							yield: 1
						}
					}
				]
			},
			{
				name: "Advanced Materials",
				description: "Advanced Materials are part of the resources branch of the Fabricator. They are gained from raw materials and basic materials through crafting.",
				tool: "Fabricator",
				items: [
					{
						name: "Aerogel",
						recipe: {
							ingredients: [
								{
									name: "Gel Sack",
									quantity: 1
								},
								{
									name: "Ruby",
									quantity: 1
								}
							],
							yield: 1
						}
					},
					{
						name: "Benzene",
						recipe: {
							ingredients: [
								{
									name: "Blood Oil",
									quantity: 3
								}
							],
							yield: 1
						}
					},
					{
						name: "Hydrochloric Acid",
						recipe: {
							ingredients: [
								{
									name: "Deep Shroom",
									quantity: 3
								},
								{
									name: "Salt Deposit",
									quantity: 1
								}
							],
							yield: 1
						}
					},
					{
						name: "Polyaniline",
						recipe: {
							ingredients: [
								{
									name: "Gold",
									quantity: 1
								},
								{
									name: "Hydrochloric Acid",
									quantity: 1
								}
							],
							yield: 1
						}
					},
					{
						name: "Synthetic Fibers",
						recipe: {
							ingredients: [
								{
									name: "Benzene",
									quantity: 1 
								},
								{
									name: "Synthetic Fibers",
									quantity: 1
								}
							],
							yield: 1
						}
					}
				]
			},
			{
				name: "Electronics",
				description: "Electronics are crafted through the combination of two or more items via the Fabricator. Some items are only available by using the Console Commands or in Creative Mode.",
				tool: "Fabricator",
				items: [
					{
						name: "Advanced Wiring Kit",
						recipe: {
							ingredients: [
								{
									name: "Wiring Kit",
									quantity: 1
								},
								{
									name: "Gold",
									quantity: 2
								},
								{
									name: "Computer Chip",
									quantity: 1
								}
							],
							yield: 1
						}
					},
					{
						name: "Battery",
						recipe: {
							ingredients: [
								{
									name: "Acid Mushroom",
									quantity: 2
								},
								{
									name: "Gold",
									quantity: 1
								}
							],
							yield: 1
						}
					},
					{
						name: "Computer Chip",
						recipe: {
							ingredients: [
								{
									name: "Table Coral Sample",
									quantity: 2
								},
								{
									name: "Gold",
									quantity: 1
								},
								{
									name: "Copper Wire",
									quantity: 1
								}
							],
							yield: 1
						}
					},
					{
						name: "Copper Wire",
						recipe: {
							ingredients: [
								{
									name: "Copper Ore",
									quantity: 2
								}
							],
							yield: 1
						}
					},
					{
						name: "Ion Battery",
						recipe: {
							ingredients: [
								{
									name: "Ion Cube",
									quantity: 1
								},
								{
									name: "Gold",
									quantity: 1
								},
								{
									name: "Silver Ore",
									quantity: 1
								}
							],
							yield: 1
						}
					},
					{
						name: "Ion Power Cell",
						recipe: {
							ingredients: [
								{
									name: "Ion Battery",
									quantity: 2
								},
								{
									name: "Silicone Rubber",
									quantity: 1
								}
							],
							yield: 1
						}
					},
					{
						name: "Power Cell",
						recipe: {
							ingredients: [
								{
									name: "Battery",
									quantity: 2
								},
								{
									name: "Silicone Rubber",
									quantity: 1
								}
							],
							yield: 1
						}
					},
					{
						name: "Reactor Rod",
						recipe: {
							ingredients: [
								{
									name: "Uraninite Crystal",
									quantity: 3
								},
								{
									name: "Lead",
									quantity: 1
								},
								{
									name: "Titanium",
									quantity: 1
								},
								{
									name: "Glass",
									quantity: 1
								}
							],
							yield: 1
						}
					},
					{
						name: "Wiring Kit",
						recipe: {
							ingredients: [
								{
									name: "Silver Ore",
									quantity: 2
								}
							],
							yield: 1
						}
					}
				],
			},
			{
				name: "Equipment",
				description: "Equipment is crafted from Basic Materials or Advanced Materials by using the Fabricator and the Modification Station.",
				tool: "Fabricator, Modification Station",
				items: [
					{
						name: "Compass",
						recipe: {
							ingredients: [
								{
									name: "Copper Wire",
									quantity: 1
								},
								{
									name: "Wiring Kit",
									quantity: 1
								}
							],
							yield: 1
						}
					},
					{
						name: "Fins",
						recipe: {
							ingredients: [
								{
									name: "Silicone Rubber",
									quantity: 2
								}
							],
							yield: 1
						}
					},
					{
						name: "Fire Extinguisher",
						recipe: {
							ingredients: [
								{
									name: "Titanium",
									quantity: 3
								}
							],
							yield: 1
						}
					},
					{
						name: "First Aid Kit",
						recipe: {
							ingredients: [
								{
									name: "Fiber Mesh",
									quantity: 1
								}
							],
							yield: 1
						}
					},
					{
						name: "Floating Air Pump",
						recipe: {
							ingredients: [
								{
									name: "Titanium",
									quantity: 2
								}
							],
							yield: 1
						}
					},
					{
						name: "High Capacity O2 Tank",
						recipe: {
							ingredients: [
								{
									name: "Standard O2 Tank",
									quantity: 1
								},
								{
									name: "Glass",
									quantity: 2
								},
								{
									name: "Titanium",
									quantity: 4
								},
								{
									name: "Silver Ore",
									quantity: 1
								}
							],
							yield: 1
						}
					},
					{
						name: "Lightweight High Capacity Tank",
						recipe: {
							ingredients: [
								{
									name: "High Capacity O2 Tank",
									quantity: 1
								},
								{
									name: "Plastel Ingot",
									quantity: 1
								}
							],
							yield: 1
						}
					},
					{
						name: "Pipe",
						recipe: {
							ingredients: [
								{
									name: "Titanium",
									quantity: 2
								}
							],
							yield: 1
						}
					},
					{
						name: "Radiation Suit",
						recipe: {
							ingredients: [
								{
									name: "Fiber Mesh",
									quantity: 2
								},
								{
									name: "Lead",
									quantity: 2
								}
							],
							yield: 5
						}
					},
					{
						name: "Rebreather",
						recipe: {
							ingredients: [
								{
									name: "Wiring Kit",
									quantity: 1
								},
								{
									name: "Fiber Mesh",
									quantity: 1
								}
							],
							yield: 1
						}
					},
					{
						name: "Reinforced Dive Suit",
						recipe: {
							ingredients: [
								{
									name: "Synthetic Fibers",
									quantity: 1
								},
								{
									name: "Diamond",
									quantity: 2
								},
								{
									name: "Titanium",
									quantity: 2
								}
							],
							yield: 1
						}
					},
					{
						name: "Scanner Room HUD Chip",
						recipe: {
							ingredients: [
								{
									name: "Computer Chip",
									quantity: 1
								},
								{
									name: "Magnetite",
									quantity: 2
								}
							],
							yield: 1
						}
					},
					{
						name: "Standard O2 Tank",
						recipe: {
							ingredients: [
								{
									name: "Titanium",
									quantity: 3
								}
							],
							yield: 1
						}
					},
					{
						name: "Stillsuit",
						recipe: {
							ingredients: [
								{
									name: "Synthetic Fibers",
									quantity: 1
								},
								{
									name: "Aerogel",
									quantity: 1
								},
								{
									name: "Copper Wire",
									quantity: 1
								}
							],
							yield: 1
						}
					},
					{
						name: "Swim Charge Fins",
						recipe: {
							ingredients: [
								{
									name: "Fins",
									quantity: 1
								},
								{
									name: "Polyaniline",
									quantity: 1
								},
								{
									name: "Wiring Kit",
									quantity: 1
								}
							],
							yield: 1
						}
					},
					{
						name: "Ultra Glide Fins",
						recipe: {
							ingredients: [
								{
									name: "Fins",
									quantity: 1
								},
								{
									name: "Silicone Rubber",
									quantity: 2
								},
								{
									name: "Titanium",
									quantity: 1
								},
								{
									name: "Lithium",
									quantity: 1
								}
							],
							yield: 1
						}
					},
					{
						name: "Ultra High Capacity Tank",
						recipe: {
							ingredients: [
								{
									name: "High Capacity O2 Tank",
									quantity: 1
								},
								{
									name: "Lithium",
									quantity: 4
								}
							],
							yield: 1
						}
					}
				],
			},
			{
				name: "Deployables",
				description: "Deployables are items crafted using the Fabricator. Except for the Seaglide and the Creature Decoy, all other Deployables need to be deployed in the environment in order to function.",
				tool: "Fabricator",
				items: [
					{
						name: "Beacon",
						recipe: {
							ingredients: [
								{
									name: "Copper",
									quantity: 1
								},
								{
									name: "Titanium",
									quantity: 1
								}
							],
							yield: 1
						}
					},
					{
						name: "Creature Decoy",
						recipe: {
							ingredients: [
								{
									name: "Titanium",
									quantity: 3
								},
								{
									name: "Wiring Kit",
									quantity: 1
								}
							],
							yield: 2
						}
					},
					{
						name: "Grav Trap",
						recipe: {
							ingredients: [
								{
									name: "Battery",
									quantity: 1
								},
								{
									name: "Copper Ore",
									quantity: 1
								},
								{
									name: "Titanium",
									quantity: 1
								}
							],
							yield: 1
						}
					},
					{
						name: "Mobile Vehicle Bay",
						recipe: {
							ingredients: [
								{
									name: "Titanium Ingot",
									quantity: 1
								},
								{
									name: "Lubricant",
									quantity: 1
								},
								{
									name: "Battery",
									quantity: 1
								}
							],
							yield: 1
						}
					},
					{
						name: "Seaglide",
						recipe: {
							ingredients: [
								{
									name: "Battery",
									quantity: 1
								},
								{
									name: "Lubricant",
									quantity: 1
								},
								{
									name: "Copper Wire",
									quantity: 1
								},
								{
									name: "Titanium",
									quantity: 1
								}
							],
							yield: 1
						}
					},
					{
						name: "Waterproof Locker",
						recipe: {
							ingredients: [
								{
									name: "Titanium",
									quantity: 4
								}
							],
							yield: 1
						}
					}
				]
			},
			{
				name: "Tools",
				description: "Tools are devices that are either crafted from Basic Materials or Advanced Materials by using the Fabricator or upgraded from other Tools using the Modification Station. They are carried in the Inventory and can be equipped in the Toolbar. Some of them can also consume Energy, like the Flashlight.",
				tool: "Fabricator",
				items: [
					{
						name: "Air Bladder",
						recipe: {
							ingredients: [
								{
									name: "Silicone Rubber",
									quantity: 1
								},
								{
									name: "Bladderfish",
									quantity: 1
								}
							],
							yield: 1
						}
					},
					{
						name: "Flare",
						recipe: {
							ingredients: [
								{
									name: "Cave Sulfur",
									quantity: 1
								}
							],
							yield: 5
						}
					},
					{
						name: "Flashlight",
						recipe: {
							ingredients: [
								{
									name: "Battery",
									quantity: 1
								},
								{
									name: "Glass",
									quantity: 1
								}
							],
							yield: 1
						}
					},
					{
						name: "Habitat Builder",
						recipe: {
							ingredients: [
								{
									name: "Wiring Kit",
									quantity: 1
								},
								{
									name: "Computer Chip",
									quantity: 1
								},
								{
									name: "Battery",
									quantity: 1
								}
							],
							yield: 1
						}
					},
					{
						name: "Laser Cutter",
						recipe: {
							ingredients: [
								{
									name: "Diamond",
									quantity: 2
								},
								{
									name: "Battery",
									quantity: 1
								},
								{
									name: "Titanium",
									quantity: 1
								},
								{
									name: "Cave Sulfur",
									quantity: 1
								}
							],
							yield: 1
						}
					},
					{
						name: "Light Stick",
						recipe: {
							ingredients: [
								{
									name: "Battery",
									quantity: 1
								},
								{
									name: "Titanium",
									quantity: 1
								},
								{
									name: "Glass",
									quantity: 1
								}
							],
							yield: 1
						}
					},
					{
						name: "Pathfinder Tool",
						recipe: {
							ingredients: [
								{
									name: "Creepvine Seed Cluster",
									quantity: 2
								},
								{
									name: "Copper Wire",
									quantity: 1
								},
								{
									name: "Titanium",
									quantity: 1
								}
							],
							yield: 1
						}
					},
					{
						name: "Propulsion Cannon",
						recipe: {
							ingredients: [
								{
									name: "Wiring Kit",
									quantity: 1
								},
								{
									name: "Battery",
									quantity: 1
								},
								{
									name: "Titanium",
									quantity: 1
								}
							],
							yield: 1
						}
					},
					{
						name: "Repair Tool",
						recipe: {
							ingredients: [
								{
									name: "Silicone Rubber",
									quantity: 1
								},
								{
									name: "Salt Deposit",
									quantity: 1
								},
								{
									name: "Titanium",
									quantity: 1
								}
							],
							yield: 1
						}
					},
					{
						name: "Repulsion Cannon",
						recipe: {
							ingredients: [
								{
									name: "Propulsion Cannon",
									quantity: 1
								},
								{
									name: "Computer Chip",
									quantity: 1
								},
								{
									name: "Magnetite",
									quantity: 2
								}
							],
							yield: 1
						}
					},
					{
						name: "Scanner",
						recipe: {
							ingredients: [
								{
									name: "Battery",
									quantity: 1
								},
								{
									name: "Titanium",
									quantity: 1
								}
							],
							yield: 1
						}
					},
					{
						name: "Stasis Rifle",
						recipe: {
							ingredients: [
								{
									name: "Computer Chip",
									quantity: 1
								},
								{
									name: "Battery",
									quantity: 1
								},
								{
									name: "Titanium",
									quantity: 1
								},
								{
									name: "Magnetite",
									quantity: 2
								}
							],
							yield: 1
						}
					},
					{
						name: "Survival Knife",
						recipe: {
							ingredients: [
								{
									name: "Silicone Rubber",
									quantity: 1
								},
								{
									name: "Titanium",
									quantity: 1
								}
							],
							yield: 1
						}
					},
					{
						name: "Thermoblade",
						recipe: {
							ingredients: [
								{
									name: "Survival Knife",
									quantity: 1
								},
								{
									name: "Battery",
									quantity: 1
								}
							],
							yield: 1
						}
					}
				]
			},
			{
				name: "Seamoth",
				description: "",
				tool: "Mobile Vehicle Bay",
				items: [
					{
						name: "Seamoth",
						recipe: {
							ingredients: [
								{
									name: "Titanium Ingot",
									quantity: 1
								},
								{
									name: "Battery",
									quantity: 1
								},
								{
									name: "Glass",
									quantity: 2
								},
								{
									name: "Lubricant",
									quantity: 2
								},
								{
									name: "Lead",
									quantity: 2
								}
							],
							yield: 1
						}
					},
					{
						name: "Seamoth Depth Module MK1",
						recipe: {
							ingredients: [
								{
									name: "Titanium Ingot",
									quantity: 1
								},
								{
									name: "Glass",
									quantity: 2
								}
							],
							yield: 1
						}
					},
					{
						name: "Seamoth Depth Module MK2",
						recipe: {
							ingredients: [
								{
									name: "Seamoth Depth Module MK1",
									quantity: 1
								},
								{
									name: "Plasteel Ingot",
									quantity: 1
								},
								{
									name: "Magnetite",
									quantity: 2
								},
								{
									name: "Enameled Glass",
									quantity: 2
								}
							],
							yield: 1
						}
					},
					{
						name: "Seamoth Depth Module MK3",
						recipe: {
							ingredients: [
								{
									name: "Seamoth Depth Module MK2",
									quantity: 1
								},
								{
									name: "Plasteel Ingot",
									quantity: 1
								},
								{
									name: "Ruby",
									quantity: 3
								}
							],
							yield: 1
						}
					},
					{
						name: "Seamoth Storage Module",
						recipe: {
							ingredients: [
								{
									name: "Titanium",
									quantity: 3
								},
								{
									name: "Lithium",
									quantity: 1
								}
							],
							yield: 1
						}
					},
					{
						name: "Seamoth Hull Reinforcement",
						recipe: {
							ingredients: [
								{
									name: "Titanium",
									quantity: 3
								},
								{
									name: "Lithium",
									quantity: 1
								},
								{
									name: "Diamond",
									quantity: 4
								}
							],
							yield: 1
						}
					},
					{
						name: "Seamoth Engine Efficiency Module",
						recipe: {
							ingredients: [
								{
									name: "Computer Chip",
									quantity: 1
								},
								{
									name: "Polyaniline",
									quantity: 1
								}
							],
							yield: 1
						}
					},
					{
						name: "Seamoth Solar Charger",
						recipe: {
							ingredients: [
								{
									name: "Advanced Wiring Kit",
									quantity: 1
								},
								{
									name: "Enameled Glass",
									quantity: 1
								}
							],
							yield: 1
						}
					},
					{
						name: "Seamoth Perimeter Defense System",
						recipe: {
							ingredients: [
								{
									name: "Polyaniline",
									quantity: 1
								},
								{
									name: "Wiring Kit",
									quantity: 1
								}
							],
							yield: 1
						}
					},
					{
						name: "Seamoth Torpedo System",
						recipe: {
							ingredients: [
								{
									name: "Titanium",
									quantity: 3
								},
								{
									name: "Lithium",
									quantity: 1
								},
								{
									name: "Aerogel",
									quantity: 1
								}
							],
							yield: 1
						}
					},
					{
						name: "Seamoth Sonar",
						recipe: {
							ingredients: [
								{
									name: "Copper Wire",
									quantity: 1
								},
								{
									name: "Magnetite",
									quantity: 2
								}
							],
							yield: 1
						}
					}
				]
			},
			{
				name: "Prawn Suit",
				description: "",
				tool: "Mobile vehicle Bay",
				items: [
					{
						name: "Prawn Suit",
						recipe: {
							ingredients: [
								{
									name: "Plasteel Ingot",
									quantity: 2
								},
								{
									name: "Aerogel",
									quantity: 2
								},
								{
									name: "Enameled Glass",
									quantity: 1
								},
								{
									name: "Aerogel",
									quantity: 1
								},
								{
									name: "Diamond",
									quantity: 2
								},
								{
									name: "Lead",
									quantity: 2
								}
							],
							yield: 1
						}
					},
					{
						name: "Prawn Suit Depth Module MK1",
						recipe: {
							ingredients: [
								{
									name: "Plasteel Ingot",
									quantity: 1
								},
								{
									name: "Nickel Ore",
									quantity: 3
								},
								{
									name: "Ruby",
									quantity: 2
								}
							],
							yield: 1
						}
					},
					{
						name: "Prawn Suit Depth Module MK2",
						recipe: {
							ingredients: [
								{
									name: "Prawn Suit Depth Module MK1",
									quantity: 1
								},
								{
									name: "Titanium",
									quantity: 5
								},
								{
									name: "Lithium",
									quantity: 2
								},
								{
									name: "Kyanite",
									quantity: 3
								}
							],
							yield: 1
						}
					},
					{
						name: "Prawn Suit Storage Module",
						recipe: {
							ingredients: [
								{
									name: "Titanium",
									quantity: 3
								},
								{
									name: "Lithium",
									quantity: 1
								}
							],
							yield: 1
						}
					},
					{
						name: "Prawn Suit Hull Reinforcement",
						recipe: {
							ingredients: [
								{
									name: "Titanium",
									quantity: 3
								},
								{
									name: "Lithium",
									quantity: 1
								},
								{
									name: "Diamond",
									quantity: 4
								}
							],
							yield: 1
						}
					},
					{
						name: "Prawn Suit Engine Efficiency Module",
						recipe: {
							ingredients: [
								{
									name: "Computer Chip",
									quantity: 1
								},
								{
									name: "Polyaniline",
									quantity: 1
								}
							],
							yield: 1
						}
					},
					{
						name: "Prawn Suit Thermal Reactor",
						recipe: {
							ingredients: [
								{
									name: "Kyanite",
									quantity: 2
								},
								{
									name: "Polyaniline",
									quantity: 2
								},
								{
									name: "Wiring Kit",
									quantity: 1
								}
							],
							yield: 1
						}
					},
					{
						name: "Prawn Suit Jump Jet Upgrade",
						recipe: {
							ingredients: [
								{
									name: "Nickel Ore",
									quantity: 2
								},
								{
									name: "Crystalline Sulfur",
									quantity: 3
								},
								{
									name: "Titanium",
									quantity: 5
								},
								{
									name: "Lithium",
									quantity: 1
								}
							],
							yield: 1
						}
					},
					{
						name: "Prawn Suit Drill Arm",
						recipe: {
							ingredients: [
								{
									name: "Titanium",
									quantity: 5
								},
								{
									name: "Lithium",
									quantity: 1
								},
								{
									name: "Diamond",
									quantity: 4
								}
							],
							yield: 1
						}
					},
					{
						name: "Prawn Suit Grappling Arm",
						recipe: {
							ingredients: [
								{
									name: "Advanced Wiring Kit",
									quantity: 1
								},
								{
									name: "Titanium",
									quantity: 5
								},
								{
									name: "Lithium",
									quantity: 1
								},
								{
									name: "Benzene",
									quantity: 1
								}
							],
							yield: 1
						}
					},
					{
						name: "Prawn Suit Propulsion Cannon",
						recipe: {
							ingredients: [
								{
									name: "Computer Chip",
									quantity: 1
								},
								{
									name: "Titanium",
									quantity: 5
								},
								{
									name: "Lithium",
									quantity: 1
								},
								{
									name: "Magnetite",
									quantity: 2
								}
							],
							yield: 1
						}
					},
					{
						name: "Prawn Suit Torpedo Arm",
						recipe: {
							ingredients: [
								{
									name: "Titanium",
									quantity: 5
								},
								{
									name: "Lithium",
									quantity: 1
								},
								{
									name: "Aerogel",
									quantity: 1
								}
							],
							yield: 1
						}
					}
				]
			},
			{
				name: "Cyclops",
				description: "",
				tool: "Mobile Vehicle Bay",
				items: [
					{
						name: "Cyclops",
						recipe: {
							ingredients: [
								{
									name: "Plasteel Ingot",
									quantity: 3
								},
								{
									name: "Enameled Glass",
									quantity: 3
								},
								{
									name: "Lubricant",
									quantity: 1
								},
								{
									name: "Advanced Wiring Kit",
									quantity: 1
								},
								{
									name: "Lead",
									quantity: 3
								}
							],
							yield: 1
						}
					},
					{
						name: "Cyclops Depth Module MK1",
						recipe: {
							ingredients: [
								{
									name: "Plasteel Ingot",
									quantity: 1
								},
								{
									name: "Ruby",
									quantity: 3
								}
							],
							yield: 1
						}
					},
					{
						name: "Cyclops Depth Module MK2",
						recipe: {
							ingredients: [
								{
									name: "Cyclops Depth Module MK1",
									quantity: 1
								},
								{
									name: "Plasteel Ingot",
									quantity: 3
								},
								{
									name: "Nickel Ore",
									quantity: 1
								}
							],
							yield: 1
						}
					},
					{
						name: "Cyclops Depth Module MK3",
						recipe: {
							ingredients: [
								{
									name: "Cyclops Depth Module MK2",
									quantity: 1
								},
								{
									name: "Plasteel Ingot",
									quantity: 1
								},
								{
									name: "Kyanite",
									quantity: 3
								}
							],
							yield: 1
						}
					},
					{
						name: "Cyclops Engine Efficiency Module",
						recipe: {
							ingredients: [
								{
									name: "Computer Chip",
									quantity: 1
								},
								{
									name: "Benzene",
									quantity: 1
								},
								{
									name: "Polyanaline",
									quantity: 1
								}
							],
							yield: 1
						}
					},
					{
						name: "Cyclops Thermal Reactor Module",
						recipe: {
							ingredients: [
								{
									name: "Polyaniline",
									quantity: 2
								},
								{
									name: "Kyanite",
									quantity: 4
								},
								{
									name: "Wiring Kit",
									quantity: 1
								}
							],
							yield: 1
						}
					},
					{
						name: "Cyclops Sonar Module",
						recipe: {
							ingredients: [
								{
									name: "Computer Chip",
									quantity: 1
								},
								{
									name: "Magnetite",
									quantity: 3
								}
							],
							yield: 1
						}
					},
					{
						name: "Cyclops Fire Suppression System Module",
						recipe: {
							ingredients: [
								{
									name: "Aerogel",
									quantity: 2
								},
								{
									name: "Crystalline Sulfur",
									quantity: 2
								}
							],
							yield: 1
						}
					},
					{
						name: "Cyclops Docking Bay Repair Module",
						recipe: {
							ingredients: [
								{
									name: "Repair Tool",
									quantity: 1
								},
								{
									name: "Copper Wire",
									quantity: 1
								}
							],
							yield: 1
						}
					},
					{
						name: "Cyclops Creature Decoy Tube Module",
						recipe: {
							ingredients: [
								{
									name: "Titanium",
									quantity: 3
								},
								{
									name: "Lithium",
									quantity: 2
								},
								{
									name: "Aerogel",
									quantity: 1
								}
							],
							yield: 1
						}
					},
					{
						name: "Cyclops Shield Generator Module",
						recipe: {
							ingredients: [
								{
									name: "Advanced Wiring Kit",
									quantity: 1
								},
								{
									name: "Polyaniline",
									quantity: 1
								},
								{
									name: "Power Cell",
									quantity: 1
								}
							],
							yield: 1
						}
					}
				]
			},
			{
				name: "Neptune Escape Rocket",
				description: "The Neptune Escape Rocket is a vehicle that is used to leave Planet 4546B. It consists of five constructable parts: the Neptune Launch Platform, the Neptune Gantry, Neptune Ion Boosters, Neptune Fuel Reserve, and Neptune Cockpit. The Neptune Launch Platform can be built using the Mobile Vehicle Bay, while the other four components are built on the launch platform.",
				items: [
					{
						name: "Neptune Launch Platform",
						recipe: {
							ingredients: [
								{
									name: "Lead",
									quantity: 4
								},
								{
									name: "Titanium Ingot",
									quantity: 2
								},
								{
									name: "Computer Chip",
									quantity: 1
								},
							],
							yield: 1
						}
					},
					{
						name: "Neptune Gantry",
						recipe: {
							ingredients: [
								{
									name: "Plasteel Ingot",
									quantity: 1
								},
								{
									name: "Copper Wire",
									quantity: 1
								},
								{
									name: "Lubricant",
									quantity: 1
								},
							],
							yield: 1
						}
					},
					{
						name: "Neptune Ion Boosters",
						recipe: {
							ingredients: [
								{
									name: "Plasteel Ingot",
									quantity: 1
								},
								{
									name: "Nickel Ore",
									quantity: 3
								},
								{
									name: "Aerogel",
									quantity: 2
								},
								{
									name: "Wiring Kit",
									quantity: 1
								},
							],
							yield: 1
						}
					},
					{
						name: "Neptune Fuel Reserve",
						recipe: {
							ingredients: [
								{
									name: "Plasteel Ingot",
									quantity: 1
								},
								{
									name: "Crystalline Sulfur",
									quantity: 4
								},
								{
									name: "Kyanite",
									quantity: 4
								},
								{
									name: "Ion Power Cell",
									quantity: 2
								},
							],
							yield: 1
						}
					},
					{
						name: "Neptune Cockpit",
						recipe: {
							ingredients: [
								{
									name: "Cyclops Shield Generator Module",
									quantity: 1
								},
								{
									name: "Plasteel Ingot",
									quantity: 1
								},
								{
									name: "Enameled Glass",
									quantity: 1
								},
								{
									name: "Computer Chip",
									quantity: 1
								},
							],
							yield: 1
						}
					}
				]
			}
		],
		list: [],
		notes: "Keep your notes here."
	},
	mounted: function(){
		// Recall data from user's localStorage, if available
		// localStorage.clear(); // Uncomment to clear localStorage
		let localList = JSON.parse(localStorage.getItem("subnauticapda_list"));
		let localNotes = localStorage.getItem("subnauticapda_notes");
		this.list = localList ? localList : [];
		this.notes = localNotes ? localNotes : "";
	},
	updated: function(){
		// Store user data in localStorage
		localStorage.setItem("subnauticapda_list", JSON.stringify(this.list));
		localStorage.setItem("subnauticapda_notes", this.notes);
	},
	filters: {
		slug: function(value){
			if (!value) return "";
			value = value.replace(/\s+/g, "").toLowerCase();
			return value;
		},
		img_src: function(value){
			if (!value) return "";
			value = "img/" + value + ".png"
			return value;
		}
	},
	methods: {
		// Tab Navigation
		loadPane: function(id){
			// set the heading
			let heading = document.getElementById("heading");
			let h2 = heading.getElementsByTagName("h2")[0];
			h2.textContent = id;
			// set style for tabs
			let tabs = document.getElementsByClassName("tab");
			for(i = 0; i < tabs.length; i++){
				if(tabs[i].id === id){
					tabs[i].classList.add("active");
				} else {
					tabs[i].classList.remove("active");
				}
			}
			// show/hide the appropriate panes
			let panes = document.getElementsByClassName("pane");
			for(i = 0; i < panes.length; i++){
				if(panes[i].id === id + "-pane"){
					panes[i].style.display = "flex";
				} else {
					panes[i].style.display = "none";
				}
			}
		},
		// Toggle group
		toggle: function(groupid){
			// to refine this, the h3 should toggle the next sibling. pass in `event` instead of `group.name`
			// groupid.target.nextElementSibling.classList.add("collapsed");
			groupid = this.$options.filters.slug(groupid);
			let group = document.getElementById(groupid);
			// console.log(group);
			if(group.classList.contains("collapsed")){
				group.classList.remove("collapsed");
			} else {
				group.classList.add("collapsed");
			}
		},
		// Add an item from data.items to data.list
		addToList: function(groupindex,itemindex){
			let itemOriginal = this.groups[groupindex].items[itemindex];
			let itemList = this.list.push(itemOriginal) - 1;
			if(itemOriginal.recipe){
				// Add multiplier with default value
				this.list[itemList].recipe.multiplier = 1;
				// Copy original yield & ingredients quantities for later reference
				this.list[itemList].recipe.yieldOriginal =itemOriginal.recipe.yield;
				let ingredients = this.list[itemList].recipe.ingredients;
				for(i = 0; i < ingredients.length; i++){
					ingredients[i].quantity = ingredients[i].quantityOriginal = itemOriginal.recipe.ingredients[i].quantity; 
				}
			}
		},
		// Remove an item from data.list
		removeFromList: function(index){
			this.list[index] = null;
			this.list.splice(index,1);
		},
		// Increment/decrement yield & ingredients quantities
		changeQuantity: function(operation,index){
			let multiplier = this.list[index].recipe.multiplier;
			// Determine if operation is increment or decrement
			if(operation === "+"){
				multiplier = ++this.list[index].recipe.multiplier;
			} else {
				multiplier = --this.list[index].recipe.multiplier;
			}
			// If multiplier is 0, remove from list
			if(this.list[index].recipe.multiplier === 0){
				this.removeFromList(index);
				return;
			}
			// Perform operation on yield and ingredients
			this.list[index].recipe.yield = this.list[index].recipe.yieldOriginal * multiplier;
			let ingredients = this.list[index].recipe.ingredients;
			for(i = 0; i < ingredients.length; i++){
					ingredients[i].quantity = ingredients[i].quantityOriginal * multiplier; 
				}
		}
	}
})