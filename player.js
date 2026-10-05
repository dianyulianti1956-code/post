 function getVideoSource(idSource, cat = 'indo') {
    let sources = [];
    let isCustomCategory = CUSTOM_CATEGORIES.some(c => c.name.toLowerCase().replace(/[\s\/]+/g, '_') === cat.toLowerCase() || c.name.toLowerCase() === cat.toLowerCase());
    
    if (cat === "barat" || cat === "vip") {
        const baratWorkers = [
            "https://flat-breeze-f3c9.adisd5864.workers.dev/?id=",
            "https://rapid-mud-f1a6.adis76304.workers.dev/?id=",
            "https://delicate-bread-47e3.adisd0180.workers.dev/?id=",
            "https://aged-surf-9eca.adisd06.workers.dev/?id=",
            "https://mute-river-13b2.adisd419.workers.dev/?id=",
            "https://little-dream-9c6f.adisd4636.workers.dev/?id=",
            "https://calm-meadow-4d36.adisd464.workers.dev/?id=",
            "https://flat-rice-db77.adisd5474.workers.dev/?id=",
            "https://square-band-52e2.adisd633.workers.dev/?id=",
            "https://aged-truth-c413.adisd736.workers.dev/?id=",
            "https://young-silence-2c20.brittanystuart628.workers.dev/?id="
        ];
        baratWorkers.forEach(w => sources.push(w + idSource));
    } else if (cat === "indo_top" || cat === "hd" || cat === "new" || cat === "asia" || cat === "teen" || cat === "search" || isCustomCategory) {
        const hdWorkers = [
            "https://cdn.aguskokdoskfs.workers.dev/?id=",
            "https://cdn.alberthodges42.workers.dev/?id=",
            "https://cdn.alberthopper99.workers.dev/?id=",
            "https://cdn.alishabranch09.workers.dev/?id=",
            "https://cdn.amyhodge442.workers.dev/?id=",
            "https://cdn.andregallagher791.workers.dev/?id=",
            "https://cdn.andreaorr256.workers.dev/?id=",
            "https://cdn.as8933084.workers.dev/?id=",
            "https://cdn.antoniomaddox919.workers.dev/?id=",
            "https://cdn.aprilgardner72.workers.dev/?id="
        ];
        hdWorkers.forEach(w => sources.push(w + idSource));
    } else {
        const defaultWorkers = [
            "https://cdn.arlenewagner6.workers.dev/?id=",
            "https://cdn.blevinsarmando.workers.dev/?id=",
            "https://cdn.arnoldwagner231.workers.dev/?id=",
            "https://cdn.arthurfreeman035.workers.dev/?id=",
            "https://cdn.bergashlee.workers.dev/?id=",
            "https://cdn.aureliarivers949.workers.dev/?id=",
            "https://cdn.autumnmorse643.workers.dev/?id=",
            "https://cdn.alanputraromoo.workers.dev/?id=",
            "https://cdn.hmirna392.workers.dev/?id=",
            "https://cdn.kacungsia77.workers.dev/?id=",
            "https://cdn.carverbridgett.workers.dev/?id=",
            "https://cdn.bruceguerra3.workers.dev/?id=",
            "https://cdn.byronellis31.workers.dev/?id=",
            "https://cdn.callieschmidt033.workers.dev/?id=",
            "https://cdn.calvinbray95.workers.dev/?id=",
            "https://cdn.carloshatfield620.workers.dev/?id=",
            "https://cdn.carlosavery8.workers.dev/?id=",
            "https://cdn.carmelagood750.workers.dev/?id=",
            "https://cdn.carolroach757.workers.dev/?id=",
            "https://cdn.carolerichards012.workers.dev/?id="
        ];
        defaultWorkers.forEach(w => sources.push(w + idSource));
    }
    
    return sources;
}
