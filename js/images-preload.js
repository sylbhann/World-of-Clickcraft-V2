let images = [
    "assets/cursors/attack.cur",
    "assets/cursors/buy.cur",
    "assets/cursors/point.cur",
    "assets/cursors/point2.cur",
    "assets/img/background/elwynn.jpg",
    "assets/img/ui/ui-optionsbutton.png",
    "assets/img/ui/bag/empty-bag-slot.png",
    "assets/img/ui/equipment/empty-offhand-slot.png",
    "assets/img/ui/equipment/empty-weapon-slot.png",
    "assets/img/ui/icons/ability_marksmanship.png",
    "assets/img/ui/icons/ability_warrior_challange.png",
    "assets/img/ui/icons/inv_axe_04.png",
    "assets/img/ui/icons/inv_jewelry_necklace_01.png",
    "assets/img/ui/icons/inv_jewelry_ring_03.png",
    "assets/img/ui/icons/inv_misc_bag_10.png",
    "assets/img/ui/icons/inv_misc_pelt_wolf_ruin_04.png",
    "assets/img/ui/icons/inv_misc_questionmark.png",
    "assets/img/ui/icons/inv_misc_rune_01.png",
    "assets/img/ui/icons/inv_sword_04.png",
    "assets/img/ui/icons/inv_sword_10.png",
    "assets/img/ui/icons/trade_blacksmithing.png",
    "assets/img/ui/icons/bags/bag_1.png",
    "assets/img/ui/merchant/ui-merchant-labelslots.png",
    "assets/img/ui/money/copper.png",
    "assets/img/ui/money/diamond.png",
    "assets/img/ui/money/gold.png",
    "assets/img/ui/money/silver.png",
    "assets/img/ui/portrait/enemyframe.png",
    "assets/img/ui/portrait/levelframe.png",
    "assets/img/ui/portrait/skull-level.png",
    "assets/img/ui/portrait/enemies-portraits/abomination/abomination_1.jpg",
    "assets/img/ui/portrait/enemies-portraits/alliance/alliance_1.jpg",
    "assets/img/ui/portrait/enemies-portraits/ancient/ancient_1.jpg",
    "assets/img/ui/portrait/enemies-portraits/banshee/banshee_1.jpg",
    "assets/img/ui/portrait/enemies-portraits/banshee/banshee_2.jpg",
    "assets/img/ui/portrait/enemies-portraits/basilisk/basilisk_1.jpg",
    "assets/img/ui/portrait/enemies-portraits/bat/bat_1.jpg",
    "assets/img/ui/portrait/enemies-portraits/bat/bat_2.jpg",
    "assets/img/ui/portrait/enemies-portraits/bear/bear_1.jpg",
    "assets/img/ui/portrait/enemies-portraits/bear/bear_2.jpg",
    "assets/img/ui/portrait/enemies-portraits/bear/bear_3.jpg",
    "assets/img/ui/portrait/enemies-portraits/bear/bear_5.jpg",
    "assets/img/ui/portrait/enemies-portraits/bear/bear_6.jpg",
    "assets/img/ui/portrait/enemies-portraits/blackrock/blackrock_1.jpg",
    "assets/img/ui/portrait/enemies-portraits/blackrock/blackrock_2.jpg",
    "assets/img/ui/portrait/enemies-portraits/blackrock/blackrock_3.jpg",
    "assets/img/ui/portrait/enemies-portraits/boar/boar_1.jpg",
    "assets/img/ui/portrait/enemies-portraits/boar/boar_2.jpg",
    "assets/img/ui/portrait/enemies-portraits/boar/boar_3.jpg",
    "assets/img/ui/portrait/enemies-portraits/boar/boar_4.jpg",
    "assets/img/ui/portrait/enemies-portraits/bogbeast/bogbeast_1.jpg",
    "assets/img/ui/portrait/enemies-portraits/bogbeast/bogbeast_2.jpg",
    "assets/img/ui/portrait/enemies-portraits/bogbeast/bogbeast_3.jpg",
    "assets/img/ui/portrait/enemies-portraits/bogbeast/bogbeast_4.jpg",
    "assets/img/ui/portrait/enemies-portraits/bogbeast/bogbeast_5.jpg",
    "assets/img/ui/portrait/enemies-portraits/centaur/centaur_1.jpg",
    "assets/img/ui/portrait/enemies-portraits/centaur/centaur_2.jpg",
    "assets/img/ui/portrait/enemies-portraits/crab/crab_1.jpg",
    "assets/img/ui/portrait/enemies-portraits/crab/crab_2.jpg",
    "assets/img/ui/portrait/enemies-portraits/crocolisk/crocolisk_1.jpg",
    "assets/img/ui/portrait/enemies-portraits/crocolisk/crocolisk_2.jpg",
    "assets/img/ui/portrait/enemies-portraits/darkhound/darkhound_1.jpg",
    "assets/img/ui/portrait/enemies-portraits/darkhound/darkhound_2.jpg",
    "assets/img/ui/portrait/enemies-portraits/darkiron/darkiron_1.jpg",
    "assets/img/ui/portrait/enemies-portraits/darkiron/darkiron_2.jpg",
    "assets/img/ui/portrait/enemies-portraits/darkiron/darkiron_3.jpg",
    "assets/img/ui/portrait/enemies-portraits/darkiron/darkiron_4.jpg",
    "assets/img/ui/portrait/enemies-portraits/darkiron/darkiron_5.jpg",
    "assets/img/ui/portrait/enemies-portraits/darkiron/darkiron_6.jpg",
    "assets/img/ui/portrait/enemies-portraits/defias/defias_1.jpg",
    "assets/img/ui/portrait/enemies-portraits/defias/defias_2.jpg",
    "assets/img/ui/portrait/enemies-portraits/defias/defias_3.jpg",
    "assets/img/ui/portrait/enemies-portraits/defias/defias_4.jpg",
    "assets/img/ui/portrait/enemies-portraits/defias/defias_5.jpg",
    "assets/img/ui/portrait/enemies-portraits/defias/defias_6.jpg",
    "assets/img/ui/portrait/enemies-portraits/defias/defias_7.jpg",
    "assets/img/ui/portrait/enemies-portraits/dinosaur/dinosaur_1.jpg",
    "assets/img/ui/portrait/enemies-portraits/dinosaur/dinosaur_2.jpg",
    "assets/img/ui/portrait/enemies-portraits/dinosaur/dinosaur_3.jpg",
    "assets/img/ui/portrait/enemies-portraits/dragon/dragon_1.jpg",
    "assets/img/ui/portrait/enemies-portraits/dragon/dragon_10.jpg",
    "assets/img/ui/portrait/enemies-portraits/dragon/dragon_11.jpg",
    "assets/img/ui/portrait/enemies-portraits/dragon/dragon_12.jpg",
    "assets/img/ui/portrait/enemies-portraits/dragon/dragon_13.jpg",
    "assets/img/ui/portrait/enemies-portraits/dragon/dragon_2.jpg",
    "assets/img/ui/portrait/enemies-portraits/dragon/dragon_3.jpg",
    "assets/img/ui/portrait/enemies-portraits/dragon/dragon_4.jpg",
    "assets/img/ui/portrait/enemies-portraits/dragon/dragon_5.jpg",
    "assets/img/ui/portrait/enemies-portraits/dragon/dragon_6.jpg",
    "assets/img/ui/portrait/enemies-portraits/dragon/dragon_7.jpg",
    "assets/img/ui/portrait/enemies-portraits/dragon/dragon_8.jpg",
    "assets/img/ui/portrait/enemies-portraits/dragon/dragon_9.jpg",
    "assets/img/ui/portrait/enemies-portraits/elemental/elemental_1.jpg",
    "assets/img/ui/portrait/enemies-portraits/elemental/elemental_2.jpg",
    "assets/img/ui/portrait/enemies-portraits/elemental/elemental_3.jpg",
    "assets/img/ui/portrait/enemies-portraits/elemental/elemental_4.jpg",
    "assets/img/ui/portrait/enemies-portraits/elemental/elemental_5.jpg",
    "assets/img/ui/portrait/enemies-portraits/elemental/elemental_6.jpg",
    "assets/img/ui/portrait/enemies-portraits/falcon/falcon_1.jpg",
    "assets/img/ui/portrait/enemies-portraits/felguard/felguard_1.jpg",
    "assets/img/ui/portrait/enemies-portraits/felguard/felguard_2.jpg",
    "assets/img/ui/portrait/enemies-portraits/felstalker/felstalker_1.jpg",
    "assets/img/ui/portrait/enemies-portraits/furbolg/furbolg_1.jpg",
    "assets/img/ui/portrait/enemies-portraits/furbolg/furbolg_2.jpg",
    "assets/img/ui/portrait/enemies-portraits/gargoyle/gargoyle_1.jpg",
    "assets/img/ui/portrait/enemies-portraits/ghost/ghost_1.jpg",
    "assets/img/ui/portrait/enemies-portraits/ghoul/ghoul_1.jpg",
    "assets/img/ui/portrait/enemies-portraits/ghoul/ghoul_2.jpg",
    "assets/img/ui/portrait/enemies-portraits/ghoul/ghoul_3.jpg",
    "assets/img/ui/portrait/enemies-portraits/giant/giant_1.jpg",
    "assets/img/ui/portrait/enemies-portraits/giant/giant_2.jpg",
    "assets/img/ui/portrait/enemies-portraits/giraffe/giraffe_1.jpg",
    "assets/img/ui/portrait/enemies-portraits/gnoll/gnoll_1.jpg",
    "assets/img/ui/portrait/enemies-portraits/gnoll/gnoll_10.jpg",
    "assets/img/ui/portrait/enemies-portraits/gnoll/gnoll_11.jpg",
    "assets/img/ui/portrait/enemies-portraits/gnoll/gnoll_12.jpg",
    "assets/img/ui/portrait/enemies-portraits/gnoll/gnoll_2.jpg",
    "assets/img/ui/portrait/enemies-portraits/gnoll/gnoll_3.jpg",
    "assets/img/ui/portrait/enemies-portraits/gnoll/gnoll_4.jpg",
    "assets/img/ui/portrait/enemies-portraits/gnoll/gnoll_5.jpg",
    "assets/img/ui/portrait/enemies-portraits/gnoll/gnoll_6.jpg",
    "assets/img/ui/portrait/enemies-portraits/gnoll/gnoll_7.jpg",
    "assets/img/ui/portrait/enemies-portraits/gnoll/gnoll_8.jpg",
    "assets/img/ui/portrait/enemies-portraits/gnoll/gnoll_9.jpg",
    "assets/img/ui/portrait/enemies-portraits/gobelin/gobelin_1.jpg",
    "assets/img/ui/portrait/enemies-portraits/gobelin/gobelin_2.jpg",
    "assets/img/ui/portrait/enemies-portraits/gobelin/gobelin_3.jpg",
    "assets/img/ui/portrait/enemies-portraits/gobelin/gobelin_4.jpg",
    "assets/img/ui/portrait/enemies-portraits/golem/golem_1.jpg",
    "assets/img/ui/portrait/enemies-portraits/golem/golem_2.jpg",
    "assets/img/ui/portrait/enemies-portraits/gorilla/gorilla_1.jpg",
    "assets/img/ui/portrait/enemies-portraits/grimtotem/grimtotem_1.jpg",
    "assets/img/ui/portrait/enemies-portraits/grimtotem/grimtotem_2.jpg",
    "assets/img/ui/portrait/enemies-portraits/grimtotem/grimtotem_3.jpg",
    "assets/img/ui/portrait/enemies-portraits/harvestgolem/harvestgolem_1.jpg",
    "assets/img/ui/portrait/enemies-portraits/harvestgolem/harvestgolem_2.jpg",
    "assets/img/ui/portrait/enemies-portraits/horde/horde_1.jpg",
    "assets/img/ui/portrait/enemies-portraits/hydra/hydra_1.jpg",
    "assets/img/ui/portrait/enemies-portraits/hydra/hydra_2.jpg",
    "assets/img/ui/portrait/enemies-portraits/hyena/hyena_1.jpg",
    "assets/img/ui/portrait/enemies-portraits/hyena/hyena_2.jpg",
    "assets/img/ui/portrait/enemies-portraits/imp/imp_1.jpg",
    "assets/img/ui/portrait/enemies-portraits/imp/imp_2.jpg",
    "assets/img/ui/portrait/enemies-portraits/infernal/infernal_1.jpg",
    "assets/img/ui/portrait/enemies-portraits/kobold/kobold_1.jpg",
    "assets/img/ui/portrait/enemies-portraits/kobold/kobold_2.jpg",
    "assets/img/ui/portrait/enemies-portraits/kodo/kodo_1.jpg",
    "assets/img/ui/portrait/enemies-portraits/lasher/lasher_1.jpg",
    "assets/img/ui/portrait/enemies-portraits/lasher/lasher_2.jpg",
    "assets/img/ui/portrait/enemies-portraits/maggot/maggot_1.jpg",
    "assets/img/ui/portrait/enemies-portraits/moonkin/moonkin_1.jpg",
    "assets/img/ui/portrait/enemies-portraits/moonkin/moonkin_2.jpg",
    "assets/img/ui/portrait/enemies-portraits/murloc/murloc_1.jpg",
    "assets/img/ui/portrait/enemies-portraits/murloc/murloc_2.jpg",
    "assets/img/ui/portrait/enemies-portraits/murloc/murloc_3.jpg",
    "assets/img/ui/portrait/enemies-portraits/naga/naga_1.jpg",
    "assets/img/ui/portrait/enemies-portraits/naga/naga_2.jpg",
    "assets/img/ui/portrait/enemies-portraits/nerubian/nerubian_1.jpg",
    "assets/img/ui/portrait/enemies-portraits/ogre/ogre_1.jpg",
    "assets/img/ui/portrait/enemies-portraits/ogre/ogre_2.jpg",
    "assets/img/ui/portrait/enemies-portraits/ogre/ogre_3.jpg",
    "assets/img/ui/portrait/enemies-portraits/ogre/ogre_4.jpg",
    "assets/img/ui/portrait/enemies-portraits/ogre/ogre_5.jpg",
    "assets/img/ui/portrait/enemies-portraits/ooze/ooze_1.jpg",
    "assets/img/ui/portrait/enemies-portraits/ooze/ooze_2.jpg",
    "assets/img/ui/portrait/enemies-portraits/ooze/ooze_3.jpg",
    "assets/img/ui/portrait/enemies-portraits/ooze/ooze_4.jpg",
    "assets/img/ui/portrait/enemies-portraits/ooze/ooze_5.jpg",
    "assets/img/ui/portrait/enemies-portraits/peon/peon_1.jpg",
    "assets/img/ui/portrait/enemies-portraits/pirate/pirate_1.jpg",
    "assets/img/ui/portrait/enemies-portraits/pirate/pirate_2.jpg",
    "assets/img/ui/portrait/enemies-portraits/pirate/pirate_3.jpg",
    "assets/img/ui/portrait/enemies-portraits/pirate/pirate_4.jpg",
    "assets/img/ui/portrait/enemies-portraits/prowler/prowler_1.jpg",
    "assets/img/ui/portrait/enemies-portraits/prowler/prowler_2.jpg",
    "assets/img/ui/portrait/enemies-portraits/quilboar/quilboar_1.jpg",
    "assets/img/ui/portrait/enemies-portraits/quilboar/quilboar_2.jpg",
    "assets/img/ui/portrait/enemies-portraits/quilboar/quilboar_3.jpg",
    "assets/img/ui/portrait/enemies-portraits/raptor/raptor_1.jpg",
    "assets/img/ui/portrait/enemies-portraits/raptor/raptor_2.jpg",
    "assets/img/ui/portrait/enemies-portraits/raptor/raptor_3.jpg",
    "assets/img/ui/portrait/enemies-portraits/raptor/raptor_4.jpg",
    "assets/img/ui/portrait/enemies-portraits/satyr/satyr_1.jpg",
    "assets/img/ui/portrait/enemies-portraits/satyr/satyr_2.jpg",
    "assets/img/ui/portrait/enemies-portraits/satyr/satyr_3.jpg",
    "assets/img/ui/portrait/enemies-portraits/satyr/satyr_4.jpg",
    "assets/img/ui/portrait/enemies-portraits/satyr/satyr_5.jpg",
    "assets/img/ui/portrait/enemies-portraits/scarletcrusade/scarletcrusade_1.jpg",
    "assets/img/ui/portrait/enemies-portraits/scarletcrusade/scarletcrusade_10.jpg",
    "assets/img/ui/portrait/enemies-portraits/scarletcrusade/scarletcrusade_11.jpg",
    "assets/img/ui/portrait/enemies-portraits/scarletcrusade/scarletcrusade_12.jpg",
    "assets/img/ui/portrait/enemies-portraits/scarletcrusade/scarletcrusade_13.jpg",
    "assets/img/ui/portrait/enemies-portraits/scarletcrusade/scarletcrusade_14.jpg",
    "assets/img/ui/portrait/enemies-portraits/scarletcrusade/scarletcrusade_15.jpg",
    "assets/img/ui/portrait/enemies-portraits/scarletcrusade/scarletcrusade_16.jpg",
    "assets/img/ui/portrait/enemies-portraits/scarletcrusade/scarletcrusade_17.jpg",
    "assets/img/ui/portrait/enemies-portraits/scarletcrusade/scarletcrusade_18.jpg",
    "assets/img/ui/portrait/enemies-portraits/scarletcrusade/scarletcrusade_19.jpg",
    "assets/img/ui/portrait/enemies-portraits/scarletcrusade/scarletcrusade_2.jpg",
    "assets/img/ui/portrait/enemies-portraits/scarletcrusade/scarletcrusade_20.jpg",
    "assets/img/ui/portrait/enemies-portraits/scarletcrusade/scarletcrusade_21.jpg",
    "assets/img/ui/portrait/enemies-portraits/scarletcrusade/scarletcrusade_3.jpg",
    "assets/img/ui/portrait/enemies-portraits/scarletcrusade/scarletcrusade_4.jpg",
    "assets/img/ui/portrait/enemies-portraits/scarletcrusade/scarletcrusade_5.jpg",
    "assets/img/ui/portrait/enemies-portraits/scarletcrusade/scarletcrusade_6.jpg",
    "assets/img/ui/portrait/enemies-portraits/scarletcrusade/scarletcrusade_7.jpg",
    "assets/img/ui/portrait/enemies-portraits/scarletcrusade/scarletcrusade_8.jpg",
    "assets/img/ui/portrait/enemies-portraits/scarletcrusade/scarletcrusade_9.jpg",
    "assets/img/ui/portrait/enemies-portraits/scorpid/scorpid_1.jpg",
    "assets/img/ui/portrait/enemies-portraits/scorpid/scorpid_2.jpg",
    "assets/img/ui/portrait/enemies-portraits/scorpid/scorpid_3.jpg",
    "assets/img/ui/portrait/enemies-portraits/scorpid/scorpid_4.jpg",
    "assets/img/ui/portrait/enemies-portraits/silithid/silithid_1.jpg",
    "assets/img/ui/portrait/enemies-portraits/silithid/silithid_2.jpg",
    "assets/img/ui/portrait/enemies-portraits/silithid/silithid_3.jpg",
    "assets/img/ui/portrait/enemies-portraits/silithid/silithid_4.jpg",
    "assets/img/ui/portrait/enemies-portraits/silithid/silithid_5.jpg",
    "assets/img/ui/portrait/enemies-portraits/skeleton/skeleton_1.jpg",
    "assets/img/ui/portrait/enemies-portraits/skeleton/skeleton_2.jpg",
    "assets/img/ui/portrait/enemies-portraits/skeleton/skeleton_3.jpg",
    "assets/img/ui/portrait/enemies-portraits/skeleton/skeleton_4.jpg",
    "assets/img/ui/portrait/enemies-portraits/skeleton/skeleton_5.jpg",
    "assets/img/ui/portrait/enemies-portraits/skeleton/skeleton_6.jpg",
    "assets/img/ui/portrait/enemies-portraits/spider/spider_1.jpg",
    "assets/img/ui/portrait/enemies-portraits/spider/spider_2.jpg",
    "assets/img/ui/portrait/enemies-portraits/spider/spider_3.jpg",
    "assets/img/ui/portrait/enemies-portraits/spider/spider_4.jpg",
    "assets/img/ui/portrait/enemies-portraits/spirithealer/spirithealer_1.jpg",
    "assets/img/ui/portrait/enemies-portraits/succubus/succubus_1.jpg",
    "assets/img/ui/portrait/enemies-portraits/syndicate/syndicate_1.jpg",
    "assets/img/ui/portrait/enemies-portraits/tallstrider/tallstrider_1.jpg",
    "assets/img/ui/portrait/enemies-portraits/tallstrider/tallstrider_2.jpg",
    "assets/img/ui/portrait/enemies-portraits/tarantula/tarantula_1.jpg",
    "assets/img/ui/portrait/enemies-portraits/tarantula/tarantula_2.jpg",
    "assets/img/ui/portrait/enemies-portraits/tarantula/tarantula_3.jpg",
    "assets/img/ui/portrait/enemies-portraits/thunderlizard/thunderlizard_1.jpg",
    "assets/img/ui/portrait/enemies-portraits/thunderlizard/thunderlizard_2.jpg",
    "assets/img/ui/portrait/enemies-portraits/thunderlizard/thunderlizard_3.jpg",
    "assets/img/ui/portrait/enemies-portraits/tiger/tiger_1.jpg",
    "assets/img/ui/portrait/enemies-portraits/tiger/tiger_2.jpg",
    "assets/img/ui/portrait/enemies-portraits/tiger/tiger_3.jpg",
    "assets/img/ui/portrait/enemies-portraits/tiger/tiger_4.jpg",
    "assets/img/ui/portrait/enemies-portraits/tiger/tiger_5.jpg",
    "assets/img/ui/portrait/enemies-portraits/tiger/tiger_6.jpg",
    "assets/img/ui/portrait/enemies-portraits/tiger/tiger_7.jpg",
    "assets/img/ui/portrait/enemies-portraits/tiger/tiger_8.jpg",
    "assets/img/ui/portrait/enemies-portraits/troll/troll_1.jpg",
    "assets/img/ui/portrait/enemies-portraits/troll/troll_2.jpg",
    "assets/img/ui/portrait/enemies-portraits/troll/troll_3.jpg",
    "assets/img/ui/portrait/enemies-portraits/troll/troll_4.jpg",
    "assets/img/ui/portrait/enemies-portraits/turtle/turtle_1.jpg",
    "assets/img/ui/portrait/enemies-portraits/turtle/turtle_2.jpg",
    "assets/img/ui/portrait/enemies-portraits/twilighthammer/twilighthammer_1.jpg",
    "assets/img/ui/portrait/enemies-portraits/twilighthammer/twilighthammer_2.jpg",
    "assets/img/ui/portrait/enemies-portraits/twilighthammer/twilighthammer_3.jpg",
    "assets/img/ui/portrait/enemies-portraits/twilighthammer/twilighthammer_4.jpg",
    "assets/img/ui/portrait/enemies-portraits/twilighthammer/twilighthammer_5.jpg",
    "assets/img/ui/portrait/enemies-portraits/twilighthammer/twilighthammer_6.jpg",
    "assets/img/ui/portrait/enemies-portraits/twilighthammer/twilighthammer_7.jpg",
    "assets/img/ui/portrait/enemies-portraits/twilighthammer/twilighthammer_8.jpg",
    "assets/img/ui/portrait/enemies-portraits/voidwalker/voidwalker_1.jpg",
    "assets/img/ui/portrait/enemies-portraits/vulture/vulture_1.jpg",
    "assets/img/ui/portrait/enemies-portraits/vulture/vulture_2.jpg",
    "assets/img/ui/portrait/enemies-portraits/vulture/vulture_3.jpg",
    "assets/img/ui/portrait/enemies-portraits/vulture/vulture_4.jpg",
    "assets/img/ui/portrait/enemies-portraits/windserpent/windserpent_1.jpg",
    "assets/img/ui/portrait/enemies-portraits/windserpent/windserpent_2.jpg",
    "assets/img/ui/portrait/enemies-portraits/wolf/wolf_1.jpg",
    "assets/img/ui/portrait/enemies-portraits/wolf/wolf_2.jpg",
    "assets/img/ui/portrait/enemies-portraits/wolf/wolf_3.jpg",
    "assets/img/ui/portrait/enemies-portraits/wolf/wolf_4.jpg",
    "assets/img/ui/portrait/enemies-portraits/worgen/worgen_1.jpg",
    "assets/img/ui/portrait/enemies-portraits/worgen/worgen_2.jpg",
    "assets/img/ui/portrait/enemies-portraits/worm/worm_1.jpg",
    "assets/img/ui/portrait/enemies-portraits/wyvern/wyvern_1.jpg",
    "assets/img/ui/portrait/enemies-portraits/yeti/yeti_1.jpg",
    "assets/img/ui/portrait/enemies-portraits/yeti/yeti_2.jpg",
    "assets/img/ui/portrait/enemies-portraits/zhevra/zhevra_1.jpg",
    "assets/img/ui/portrait/enemies-portraits/zombie/zombie_1.jpg",
    "assets/img/ui/portrait/enemies-portraits/zombie/zombie_2.jpg",
    "assets/img/ui/portrait/enemies-portraits/zombie/zombie_3.jpg",
    "assets/img/ui/portrait/enemies-portraits/zombie/zombie_4.jpg",
    "assets/img/ui/upgrade/reforgegreenarrow.png",
    "assets/img/ui/upgrade/reliciconframe.png", 
] 

let pre = []

function preload() {
    for(let i = 0; i < images.length; i++){
        pre[i] = new Image()
        pre[i].src = images[i]
    }
}

preload()