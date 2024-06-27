functions["start_d1"] = () => {
    return; // External effect
};
functions["start_d2"] = () => {
    return; // External effect
};
functions["start_d3"] = () => {
    return; // External effect
};
functions["start_d4"] = () => {
    return; // External effect
};
functions["start_d5"] = () => {
    return; // External effect
};
functions["start_d6"] = () => {
    return; // External effect
};
functions["start_d7"] = () => {
    return; // External effect
};
functions["start_d8"] = () => {
    return; // External effect
};
functions["start_d0"] = () => {
    return; // External effect
};



functions["goal_d1"] = () => {
    return !player.shards.lt(1e12);
};
functions["goal_d2"] = () => {
    return !player.shards.lt(1e18);
};
functions["goal_d3"] = () => {
    return !player.shards.lt(1e20);
};
functions["goal_d4"] = () => {
    return !player.shards.lt(1e24);
};
functions["goal_d5"] = () => {
    return !player.shards.lt(1e26);
};
functions["goal_d6"] = () => {
    return !player.shards.lt(1e30);
};
functions["goal_d7"] = () => {
    return !player.shards.lt(1e37);
};
functions["goal_d8"] = () => {
    return !player.shards.lt(1e44);
};
functions["goal_d0"] = () => {
    return !player.shards.lt(1e50000000000);
};



functions["end_d1"] = () => {
    return; // External effect
};
functions["end_d2"] = () => {
    return; // External effect
};
functions["end_d3"] = () => {
    return; // External effect
};
functions["end_d4"] = () => {
    return; // External effect
};
functions["end_d5"] = () => {
    return; // External effect
};
functions["end_d6"] = () => {
    return; // External effect
};
functions["end_d7"] = () => {
    return; // External effect
};
functions["end_d8"] = () => {
    return; // External effect
};
functions["end_d0"] = () => {
    return; // External effect
};

functions["effect_d2"] = (c) => {
    return big(1).max(player.time_dimensional / 1000);
};
functions["effect_d7"] = (c) => {
    return player.upgrades["TICKSPEED"].get_effect().add(1).log(10).max(1);
};