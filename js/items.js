/*  Item Notes:

Quality Table
    POOR ITEM:         0
    COMMON ITEM:       1
    UNCOMMON ITEM:     2
    RARE ITEM:         3
    EPIC ITEM:         4
    LEGENDARY ITEM:    5
    ARTIFACT ITEM:     6
    HEIRLOOM ITEM:     7

Unique Table
    NOT-UNIQUE ITEM:   0
    UNIQUE ITEM:       1
    UNIQUE-EQUIPPED:   2

slotType.name Table:
    SWORD:             0
    AXE:               1
    MACE:              2
    DAGGER:            3
    POLEARM:           4
    FIRST WEAPON:      5
    STAFF:             6
    BOW:               7
    CROSSBOW:          8
    GUN:               9
    SHIELD:            20

For Help on making items, use ChatGPT or another AI source with this prompt:
    make 10 items with this format, where id: is numbered 1 through 10, where name: is a random RPG weapon name, where equipable is true, where quality: is 0, where unique: is 0, where slotType type: is weapon, where slotType name: is random from 1 through 9 or 20, where slotType subtype: is One-Hand, where stats: could be strength: and a random number 1-10 or agility: and a random number 1-10 or intellect: and a random number 1-10 or stamina: and a random number 1-10, leaving alone the icon: and making the baseMinDamage: above 0 and below 20, making the baseMax Damage above 0 and above the baseMinDamage

*/

window.content.items = [ 

    {
        id: 1,
        name: 'Crappy Dagger',
        equipable: true,
        quality: 0, //POOR
        unique: 0, //NOT UNIQUE
        slotType: {
            type: 'weapon',
            name: 3, //DAGGER
            subtype: 'One-Hand',
        },
        stats: {
            strength: 2,
        },
        icon: 'inv_sword_04',
        baseMinDamage: 1,
        baseMaxDamage: 3,
    },
    {
        id: 2,
        name: 'Elven Bow',
        equipable: true,
        quality: 0, //POOR
        unique: 0, //NOT UNIQUE
        slotType: {
            type: 'weapon',
            name: 7, //BOW
            subtype: 'Two-Hand',
        },
        stats: {
            agility: 2,
        },
        icon: 'bow.png',
        baseMinDamage: 2,
        baseMaxDamage: 5,
    },
    {
        id:3,
        name: 'Staff of Wisdom',
        equipable: true,
        quality: 0,
        unique: 0,
        slotType: {
            type: 'weapon',
            name: 6,
            subtype: 'Two-Hand',
        },
        stats: {
            intellect: 3,
        },
        icon: 'staff.PNG',
        baseMinDamage: 4,
        baseMaxDamage: 12,
    },
        //Add more
    /*
    4. 
id: 4
name: Dagger of Shadows
equipable: true
quality: 0
unique: 0
slotType: {
  type: 'weapon'
  name: 4
  subtype: One-Hand
stats:
  agility: 6
icon: (icon image URL)
baseMinDamage: 3
baseMaxDamage: 10

5. 
id: 5
name: Mace of Fortitude
equipable: true
quality: 0
unique: 0
slotType: {
  type: 'weapon'
  name: 8
  subtype: One-Hand
stats:
  stamina: 7
icon: (icon image URL)
baseMinDamage: 6
baseMaxDamage: 18

6. 
id: 6
name: Axe of Brutality
equipable: true
quality: 0
unique: 0
slotType: {
  type: 'weapon'
  name: 5
  subtype: One-Hand
stats:
  strength: 10
icon: (icon image URL)
baseMinDamage: 8
baseMaxDamage: 19

7. 
id: 7
name: Rapier of Speed
equipable: true
quality: 0
unique: 0
slotType: {
  type: 'weapon'
  name: 1
  subtype: One-Hand
stats:
  agility: 8
icon: (icon image URL)
baseMinDamage: 6
baseMaxDamage: 14

8. 
id: 8
name: Greatsword of Justice
equipable: true
quality: 0
unique: 0
slotType: {
  type: 'weapon'
  name: 9
  subtype: One-Hand
stats:
  strength: 9
icon: (icon image URL)
baseMinDamage: 7
baseMaxDamage: 17

9. 
id: 9
name: Warhammer of the Titans
equipable: true
quality: 0
unique: 0
slotType: {
  type: 'weapon'
  name: 6
  subtype: One-Hand
stats:
  stamina: 9
icon: (icon image URL)
baseMinDamage: 7
baseMaxDamage: 18

10. 
 id: 10
 name: Spellblade of Sorcery
 equipable: true
 quality: 0
 unique: 0
 slotType: {
   type: 'weapon'
   name: 20
   subtype: One-Hand
 stats:
   intellect: 7
 icon: (icon image URL)
 baseMinDamage: 4
 baseMaxDamage: 13



    {
        id: 1,
        name: 'One',
        equipable: true,
        quality: 3,
        unique: 0,
        slotType: {
            type: 'weapon',
            name: 0,
            subtype: 'One-Hand',
        },
        stats: {
            strength: 2,
        },
        icon: 'inv_sword_04',
        baseMinDamage: 1,
        baseMaxDamage: 2,
    },
    {
        id: 2,
        name: 'Ruined Pelt',
        quality: 0,
        equipable: false,
        icon: 'inv_misc_pelt_wolf_ruin_04',
        stackMaxSize: 20,
        stackSize: 1,
        sellPrice: BigNumber(5),
    },
    {
        id: 4,
        name: 'Three',
        equipable: true,
        slotType: {
            type: 'trinket',
            subtype: 'Neck / Ring / Trinket',
        },
        stats: {
            intellect: 3,
        },
        icon: 'inv_jewelry_ring_03',
        requiredLevel: 5,
        salable: true,
        cost: BigNumber(50000),
    },
    {
        id: 5,
        name: 'poor',
        quality: 0,
        icon: null,
    },
    {
        id: 6,
        name: 'uncommon',
        quality: 2,
        icon: null,
    },
    {
        id: 7,
        name: 'rare',
        quality: 3,
        icon: null,
    },
    {
        id: 8,
        name: 'epic',
        quality: 4,
        icon: null,
    },
    {
        id: 9,
        name: 'legendary',
        quality: 5,
        icon: null,
    },
    {
        id: 10,
        name: 'Thousand',
        equipable: true,
        quality: 4,
        slotType: {
            type: 'weapon',
            name: 0,
            subtype: 'Two-Hand',
        },
        icon: 'inv_sword_04',
        baseMinDamage: 167,
        baseMaxDamage: 209,
        requiredLevel: 60,
        quote: 'A taste of Power.',
    },
    {
        id: 11,
        name: 'Dagger test',
        equipable: true,
        quality: 2,
        slotType: {
            type: 'weapon',
            name: 3,
            subtype: 'One-Hand',
        },
        icon: 'ability_marksmanship',
        baseMinDamage: 2,
        baseMaxDamage: 5,
    },
    {
        id: 12,
        name: 'The Off Hand',
        equipable: true,
        quality: 2,
        slotType: {
            type: 'weapon',
            name: 0,
            subtype: 'Off Hand',
        },
        icon: 'inv_sword_10',
        baseMinDamage: 2,
        baseMaxDamage: 5,
    },
    {
        id: 13,
        name: 'The Main Hand',
        equipable: true,
        quality: 3,
        slotType: {
            type: 'weapon',
            name: 1,
            subtype: 'Main Hand',
        },
        icon: 'inv_axe_04',
        baseMinDamage: 4,
        baseMaxDamage: 11,
    },
    {
        id: 14,
        name: 'The Necklace',
        quality: 3,
        equipable: true,
        icon: 'inv_jewelry_necklace_01',
        slotType: {
            type: 'trinket',
            subtype: 'Neck',
        },
        stats: {
            stamina: 2,
        },
        salable: true,
    },
    {
        id: 15,
        name: 'Text test',
        equipable: true,
        quality: 3,
        unique: 0,
        slotType: {
            type: 'weapon',
            name: 0,
            subtype: 'One-Hand',
        },
        icon: 'inv_sword_04',
        baseMinDamage: 4123654163870475,
        baseMaxDamage: 6123477859174104,
        effectDescription: 'Use: Nullam ullamcorper congue nibh, vel semper urna bibendum vitae. Nunc vulputate augue in congue rhoncus. Sed faucibus dui enim, ac euismod nisl elementum consectetur. Suspendisse sagittis nisl id quam cursus finibus. Etiam ut fringilla nibh, nec fermentum diam. Ut vitae diam nisl. Donec mattis scelerisque fringilla. Donec tempor erat nibh, a elementum nisl mollis non. Vivamus sed nibh ligula. Sed cursus sem eros, sed malesuada magna vehicula vitae.',
        quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla maximus ut lectus id viverra. Vestibulum quam ante, tincidunt at leo eleifend, semper faucibus lacus. Duis orci urna, tristique ut bibendum vel, feugiat sit amet elit. Fusce consectetur, ipsum eget luctus mattis, lorem justo vehicula metus, a sollicitudin eros libero vitae orci. Pellentesque vitae commodo tellus. Nullam dolor erat, aliquet non mattis a, volutpat nec enim. Phasellus maximus pellentesque interdum. Pellentesque non nulla non est pharetra rhoncus. Donec blandit facilisis malesuada. Proin ut arcu justo.'
    }
    
    
    
    
    
    
    
    
    
    
    
    
    */
]
