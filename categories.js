 const CSV_INDO_URL = `/api/config?type=indo`;
    const CSV_INDO_HOT_URL = `/api/config?type=indo_hot`;
    const CSV_Barat_URL = `/api/config?type=barat`;
    const CSV_HD_URL = `/api/config?type=hd`;
    
    const CUSTOM_CATEGORIES = [
        { name: "Indo Top", endpoint: "?k=indo&top" },
        { name: "New", endpoint: "/new" },
        { name: "Asia", endpoint: "/c/Asian_Woman-32" },
        { name: "Teen", endpoint: "/c/Teen-13" },
        
        { name: "3D", endpoint: "?k=3d&p=" },
        { name: "Anime Hentai", endpoint: "?k=anime_hentai&p=" },
        { name: "China", endpoint: "?k=china&p=" },
        { name: "Cina", endpoint: "?k=cina&p=" },
        { name: "Colmek", endpoint: "?k=colmek&p=" },
        { name: "Cosplay", endpoint: "?k=cosplay&p=" },
        { name: "Hardcore", endpoint: "?k=hardcore&p=" },
        { name: "Hijab", endpoint: "?k=hijab&p=" },
        { name: "Hot", endpoint: "?k=hot&p=" },
        { name: "Indonesia", endpoint: "?k=indonesia&p=" },
        { name: "Indonesia Terbaru", endpoint: "?k=indonesia_terbaru&p=" },
        { name: "Japanese Wife", endpoint: "?k=japanese+wife&p=" },
        { name: "Jepang", endpoint: "?k=jepang&p=" },
        { name: "Korea", endpoint: "?k=korea&p=" },
        { name: "Movie", endpoint: "?k=movie&p=" },
        { name: "Pov", endpoint: "?k=pov&p=" },
        { name: "Roblox", endpoint: "?k=roblox&p=" },
        { name: "Thailand", endpoint: "?k=thailand&p=" },
        { name: "Virgin", endpoint: "?k=virgin&p=" },
        { name: "AI", endpoint: "/c/AI-239" },
        { name: "Amateur", endpoint: "/c/Amateur-65" },
        { name: "Anal", endpoint: "/c/Anal-12" },
        { name: "Arab", endpoint: "/c/Arab-159" },
        { name: "ASMR", endpoint: "/c/ASMR-229" },
        { name: "Ass", endpoint: "/c/Ass-14" },
        { name: "BBW", endpoint: "/c/bbw-51" },
        { name: "Bi", endpoint: "/c/Bi_Sexual-62" },
        { name: "Big Ass", endpoint: "/c/Big_Ass-24" },
        { name: "Big Cock", endpoint: "/c/Big_Cock-34" },
        { name: "Big Tits", endpoint: "/c/Big_Tits-23" },
        { name: "Black", endpoint: "/c/Black_Woman-30" },
        { name: "Blonde", endpoint: "/c/Blonde-20" },
        { name: "Blowjob", endpoint: "/c/Blowjob-15" },
        { name: "Brunette", endpoint: "/c/Brunette-25" },
        { name: "Cam Porn", endpoint: "/c/Cam_Porn-58" },
        { name: "Creampie", endpoint: "/c/Creampie-40" },
        { name: "Cuckold/Hotwife", endpoint: "/c/Cuckold-237" },
        { name: "Cumshot", endpoint: "/c/Cumshot-18" },
        { name: "Femdom", endpoint: "/c/Femdom-235" },
        { name: "Fisting", endpoint: "/c/Fisting-165" },
        { name: "Fucked Up Family", endpoint: "/c/Fucked_Up_Family-81" },
        { name: "Gangbang", endpoint: "/c/Gangbang-69" },
        { name: "Gapes", endpoint: "/c/Gapes-167" },
        { name: "Indian", endpoint: "/c/Indian-89" },
        { name: "Interracial", endpoint: "/c/Interracial-27" },
        { name: "Latina", endpoint: "/c/Latina-16" },
        { name: "Lesbian", endpoint: "/c/Lesbian-26" },
        { name: "Lingerie", endpoint: "/c/Lingerie-83" },
        { name: "Mature", endpoint: "/c/Mature-38" },
        { name: "Milf", endpoint: "/c/Milf-19" },
        { name: "Oiled", endpoint: "/c/Oiled-22" },
        { name: "Redhead", endpoint: "/c/Redhead-31" },
        { name: "Solo", endpoint: "/c/Solo_and_Masturbation-33" },
        { name: "Squirting", endpoint: "/c/Squirting-56" },
        { name: "Stockings", endpoint: "/c/Stockings-28" }
    ];
    
    const getApiEndpoint = (type, param = '', pageIndex = 0) => {
        let endpointPath = "";
        let cacheTargetStr = "";
        
        const handleKeywordCategory = (keyName, catIndex) => {
            let targetPageNum = pageIndex;
            cacheTargetStr = `_k_${keyName}_p_${targetPageNum}.json`;
            endpointPath = `${CUSTOM_CATEGORIES[catIndex].endpoint}${targetPageNum}`;
        };

        const handlePathCategory = (catName, catIndex) => {
            endpointPath = `${CUSTOM_CATEGORIES[catIndex].endpoint}${pageIndex > 0 ? '/' + pageIndex : ''}`;
            cacheTargetStr = `${catName}_${pageIndex}`;
        };

        const handleIndoTopCategory = (catIndex) => {
            if (pageIndex === 0) {
                endpointPath = `${CUSTOM_CATEGORIES[catIndex].endpoint}`;
                cacheTargetStr = `_k_indo_top.json`;
            } else {
                cacheTargetStr = `_k_indo_p_${pageIndex}.json`;
                endpointPath = `?k=indo&p=${pageIndex}`;
            }
        };

        switch (type) {
            case 'vip':
                let vipPageNum = pageIndex > 0 ? pageIndex : 1;
                cacheTargetStr = `vip_read_p_${vipPageNum}.json`;
                endpointPath = `/read?p=${vipPageNum}`;
                break;
            case 'indo_top':
                handleIndoTopCategory(0);
                break;
            case 'new':
                handlePathCategory('new', 1);
                break;
            case 'asia':
            case 'asian':
                handlePathCategory('asia', 2);
                break;
            case 'teen':
                handlePathCategory('teen', 3);
                break;
            case 'search':
                if (pageIndex === 0) {
                    endpointPath = `/?k=${encodeURIComponent(param)}`;
                } else {
                    endpointPath = `/?k=${encodeURIComponent(param)}&p=${pageIndex}`;
                }
                cacheTargetStr = `search_${param}_${pageIndex}`;
                break;

            case '3d': handleKeywordCategory('3d', 4); break;
            case 'anime_hentai': handleKeywordCategory('anime_hentai', 5); break;
            case 'china': handleKeywordCategory('china', 6); break;
            case 'cina': handleKeywordCategory('cina', 7); break;
            case 'colmek': handleKeywordCategory('colmek', 8); break;
            case 'cosplay': handleKeywordCategory('cosplay', 9); break;
            case 'hardcore': handleKeywordCategory('hardcore', 10); break;
            case 'hijab': handleKeywordCategory('hijab', 11); break;
            case 'hot': handleKeywordCategory('hot', 12); break;
            case 'indonesia': handleKeywordCategory('indonesia', 13); break;
            case 'indonesia_terbaru': handleKeywordCategory('indonesia_terbaru', 14); break;
            case 'japanese_wife': handleKeywordCategory('japanese+wife', 15); break;
            case 'jepang': handleKeywordCategory('jepang', 16); break;
            case 'korea': handleKeywordCategory('korea', 17); break;
            case 'movie': handleKeywordCategory('movie', 18); break;
            case 'pov': handleKeywordCategory('pov', 19); break;
            case 'roblox': handleKeywordCategory('roblox', 20); break;
            case 'thailand': handleKeywordCategory('thailand', 21); break;
            case 'virgin': handleKeywordCategory('virgin', 22); break;

            case 'ai': handlePathCategory('ai', 23); break;
            case 'amateur': handlePathCategory('amateur', 24); break;
            case 'anal': handlePathCategory('anal', 25); break;
            case 'arab': handlePathCategory('arab', 26); break;
            case 'asmr': handlePathCategory('asmr', 27); break;
            case 'ass': handlePathCategory('ass', 28); break;
            case 'bbw': handlePathCategory('bbw', 29); break;
            case 'bi': handlePathCategory('bi', 30); break;
            case 'big_ass': handlePathCategory('big_ass', 31); break;
            case 'big_cock': handlePathCategory('big_cock', 32); break;
            case 'big_tits': handlePathCategory('big_tits', 33); break;
            case 'black': handlePathCategory('black', 34); break;
            case 'blonde': handlePathCategory('blonde', 35); break;
            case 'blowjob': handlePathCategory('blowjob', 36); break;
            case 'brunette': handlePathCategory('brunette', 37); break;
            case 'cam_porn': handlePathCategory('cam_porn', 38); break;
            case 'creampie': handlePathCategory('creampie', 39); break;
            case 'cuckold': handlePathCategory('cuckold', 40); break;
            case 'cumshot': handlePathCategory('cumshot', 41); break;
            case 'femdom': handlePathCategory('femdom', 42); break;
            case 'fisting': handlePathCategory('fisting', 43); break;
            case 'fucked_up_family': handlePathCategory('fucked_up_family', 44); break;
            case 'gangbang': handlePathCategory('gangbang', 45); break;
            case 'gapes': handlePathCategory('gapes', 46); break;
            case 'indian': handlePathCategory('indian', 47); break;
            case 'interracial': handlePathCategory('interracial', 48); break;
            case 'latina': handlePathCategory('latina', 49); break;
            case 'lesbian': handlePathCategory('lesbian', 50); break;
            case 'lingerie': handlePathCategory('lingerie', 51); break;
            case 'mature': handlePathCategory('mature', 52); break;
            case 'milf': handlePathCategory('milf', 53); break;
            case 'oiled': handlePathCategory('oiled', 54); break;
            case 'redhead': handlePathCategory('redhead', 55); break;
            case 'solo': handlePathCategory('solo', 56); break;
            case 'squirting': handlePathCategory('squirting', 57); break;
            case 'stockings': handlePathCategory('stockings', 58); break;

            default:
                endpointPath = `${CUSTOM_CATEGORIES[1].endpoint}${pageIndex > 0 ? '/' + pageIndex : ''}`;
                cacheTargetStr = `default_${pageIndex}`;
                break;
        }

        updateDebuggerInfo({ cache_target: cacheTargetStr, endpoint_url: endpointPath, grid_page: pageIndex, page_num: pageIndex, category: type });
        return endpointPath;
    };
