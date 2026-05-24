var wms_layers = [];

var format_cookedbd_marine_protected_areas_0 = new ol.format.GeoJSON();
var jsonSource_cookedbd_marine_protected_areas_0 = new ol.source.Vector({
    attributions: ' ',
});
var lyr_cookedbd_marine_protected_areas_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_cookedbd_marine_protected_areas_0, 
                style: style_cookedbd_marine_protected_areas_0,
                popuplayertitle: 'cooked:bd_marine_protected_areas',
                interactive: true,
                title: '<img src="styles/legend/cookedbd_marine_protected_areas_0.png" /> cooked:bd_marine_protected_areas'
            });

fetchWFScookedbd_marine_protected_areas_0Data(lyr_cookedbd_marine_protected_areas_0.get('title'), function (error, response) {
    var features_cookedbd_marine_protected_areas_0;
    try {
        if (typeof response === "object" && !response.nodeType) {
            // Case JSONP/GeoJSON
            features_cookedbd_marine_protected_areas_0 = format_cookedbd_marine_protected_areas_0.readFeatures(response);
        } else {
            // Case XML string o DOM
            var parser = new DOMParser();
            var xmlDoc = (typeof response === "string")
                ? parser.parseFromString(response, "text/xml")
                : response;

            // Find GML version from tags
            var gmlFormat;
            if (xmlDoc.getElementsByTagName("gml:featureMember").length > 0) {
                // GML2
                gmlFormat = new ol.format.GML2();
            } else if (xmlDoc.getElementsByTagName("gml:featureMembers").length > 0 ||
                    xmlDoc.getElementsByTagName("gml:FeatureCollection").length > 0) {
                // GML3
                gmlFormat = new ol.format.GML3();
            } else {
                // Fallback generico
                gmlFormat = new ol.format.WFS();
            }

            features_cookedbd_marine_protected_areas_0 = gmlFormat.readFeatures(xmlDoc, {
                dataProjection: 'EPSG:3857',
                featureProjection: map.getView().getProjection()
            });
        }

        if (features_cookedbd_marine_protected_areas_0 && features_cookedbd_marine_protected_areas_0.length > 0) {
            jsonSource_cookedbd_marine_protected_areas_0.addFeatures(features_cookedbd_marine_protected_areas_0);
        } else {
            lyr_cookedbd_marine_protected_areas_0.set('title', '<i class="fa-regular fa-triangle-exclamation" title="Parsing Error"></i> ' + lyr_cookedbd_marine_protected_areas_0.get('title'));
            console.warn("No features loaded for cookedbd_marine_protected_areas_0");
        }
    } catch (e) {
        console.error("Error parsing WFS for cookedbd_marine_protected_areas_0:", e);
    }
});
var format_cookedbd_biodiversity_network_1 = new ol.format.GeoJSON();
var jsonSource_cookedbd_biodiversity_network_1 = new ol.source.Vector({
    attributions: ' ',
});
var lyr_cookedbd_biodiversity_network_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_cookedbd_biodiversity_network_1, 
                style: style_cookedbd_biodiversity_network_1,
                popuplayertitle: 'cooked:bd_biodiversity_network',
                interactive: true,
    title: 'cooked:bd_biodiversity_network<br />\
    <img src="styles/legend/cookedbd_biodiversity_network_1_0.png" /> <br />\
    <img src="styles/legend/cookedbd_biodiversity_network_1_1.png" /> CBA 1a<br />\
    <img src="styles/legend/cookedbd_biodiversity_network_1_2.png" /> CBA 1b<br />\
    <img src="styles/legend/cookedbd_biodiversity_network_1_3.png" /> CBA 1c<br />\
    <img src="styles/legend/cookedbd_biodiversity_network_1_4.png" /> CBA 1d<br />\
    <img src="styles/legend/cookedbd_biodiversity_network_1_5.png" /> CBA 1e<br />\
    <img src="styles/legend/cookedbd_biodiversity_network_1_6.png" /> CBA 2<br />\
    <img src="styles/legend/cookedbd_biodiversity_network_1_7.png" /> Conservation Area<br />\
    <img src="styles/legend/cookedbd_biodiversity_network_1_8.png" /> ESA<br />\
    <img src="styles/legend/cookedbd_biodiversity_network_1_9.png" /> No Natural Habitat<br />\
    <img src="styles/legend/cookedbd_biodiversity_network_1_10.png" /> OESA<br />\
    <img src="styles/legend/cookedbd_biodiversity_network_1_11.png" /> Other Natural Areas<br />\
    <img src="styles/legend/cookedbd_biodiversity_network_1_12.png" /> Protected: In Perpetuity<br />' });

fetchWFScookedbd_biodiversity_network_1Data(lyr_cookedbd_biodiversity_network_1.get('title'), function (error, response) {
    var features_cookedbd_biodiversity_network_1;
    try {
        if (typeof response === "object" && !response.nodeType) {
            // Case JSONP/GeoJSON
            features_cookedbd_biodiversity_network_1 = format_cookedbd_biodiversity_network_1.readFeatures(response);
        } else {
            // Case XML string o DOM
            var parser = new DOMParser();
            var xmlDoc = (typeof response === "string")
                ? parser.parseFromString(response, "text/xml")
                : response;

            // Find GML version from tags
            var gmlFormat;
            if (xmlDoc.getElementsByTagName("gml:featureMember").length > 0) {
                // GML2
                gmlFormat = new ol.format.GML2();
            } else if (xmlDoc.getElementsByTagName("gml:featureMembers").length > 0 ||
                    xmlDoc.getElementsByTagName("gml:FeatureCollection").length > 0) {
                // GML3
                gmlFormat = new ol.format.GML3();
            } else {
                // Fallback generico
                gmlFormat = new ol.format.WFS();
            }

            features_cookedbd_biodiversity_network_1 = gmlFormat.readFeatures(xmlDoc, {
                dataProjection: 'EPSG:3857',
                featureProjection: map.getView().getProjection()
            });
        }

        if (features_cookedbd_biodiversity_network_1 && features_cookedbd_biodiversity_network_1.length > 0) {
            jsonSource_cookedbd_biodiversity_network_1.addFeatures(features_cookedbd_biodiversity_network_1);
        } else {
            lyr_cookedbd_biodiversity_network_1.set('title', '<i class="fa-regular fa-triangle-exclamation" title="Parsing Error"></i> ' + lyr_cookedbd_biodiversity_network_1.get('title'));
            console.warn("No features loaded for cookedbd_biodiversity_network_1");
        }
    } catch (e) {
        console.error("Error parsing WFS for cookedbd_biodiversity_network_1:", e);
    }
});
var format_cookedbd_shot_hole_boer_Beetle_2 = new ol.format.GeoJSON();
var jsonSource_cookedbd_shot_hole_boer_Beetle_2 = new ol.source.Vector({
    attributions: ' ',
});
var lyr_cookedbd_shot_hole_boer_Beetle_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_cookedbd_shot_hole_boer_Beetle_2, 
                style: style_cookedbd_shot_hole_boer_Beetle_2,
                popuplayertitle: 'cooked:bd_shot_hole_boer_Beetle',
                interactive: true,
                title: '<img src="styles/legend/cookedbd_shot_hole_boer_Beetle_2.png" /> cooked:bd_shot_hole_boer_Beetle'
            });

fetchWFScookedbd_shot_hole_boer_Beetle_2Data(lyr_cookedbd_shot_hole_boer_Beetle_2.get('title'), function (error, response) {
    var features_cookedbd_shot_hole_boer_Beetle_2;
    try {
        if (typeof response === "object" && !response.nodeType) {
            // Case JSONP/GeoJSON
            features_cookedbd_shot_hole_boer_Beetle_2 = format_cookedbd_shot_hole_boer_Beetle_2.readFeatures(response);
        } else {
            // Case XML string o DOM
            var parser = new DOMParser();
            var xmlDoc = (typeof response === "string")
                ? parser.parseFromString(response, "text/xml")
                : response;

            // Find GML version from tags
            var gmlFormat;
            if (xmlDoc.getElementsByTagName("gml:featureMember").length > 0) {
                // GML2
                gmlFormat = new ol.format.GML2();
            } else if (xmlDoc.getElementsByTagName("gml:featureMembers").length > 0 ||
                    xmlDoc.getElementsByTagName("gml:FeatureCollection").length > 0) {
                // GML3
                gmlFormat = new ol.format.GML3();
            } else {
                // Fallback generico
                gmlFormat = new ol.format.WFS();
            }

            features_cookedbd_shot_hole_boer_Beetle_2 = gmlFormat.readFeatures(xmlDoc, {
                dataProjection: 'EPSG:3857',
                featureProjection: map.getView().getProjection()
            });
        }

        if (features_cookedbd_shot_hole_boer_Beetle_2 && features_cookedbd_shot_hole_boer_Beetle_2.length > 0) {
            jsonSource_cookedbd_shot_hole_boer_Beetle_2.addFeatures(features_cookedbd_shot_hole_boer_Beetle_2);
        } else {
            lyr_cookedbd_shot_hole_boer_Beetle_2.set('title', '<i class="fa-regular fa-triangle-exclamation" title="Parsing Error"></i> ' + lyr_cookedbd_shot_hole_boer_Beetle_2.get('title'));
            console.warn("No features loaded for cookedbd_shot_hole_boer_Beetle_2");
        }
    } catch (e) {
        console.error("Error parsing WFS for cookedbd_shot_hole_boer_Beetle_2:", e);
    }
});
var format_cookedbd_tree_canopy_3 = new ol.format.GeoJSON();
var jsonSource_cookedbd_tree_canopy_3 = new ol.source.Vector({
    attributions: ' ',
});
var lyr_cookedbd_tree_canopy_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_cookedbd_tree_canopy_3, 
                style: style_cookedbd_tree_canopy_3,
                popuplayertitle: 'cooked:bd_tree_canopy',
                interactive: true,
                title: '<img src="styles/legend/cookedbd_tree_canopy_3.png" /> cooked:bd_tree_canopy'
            });

fetchWFScookedbd_tree_canopy_3Data(lyr_cookedbd_tree_canopy_3.get('title'), function (error, response) {
    var features_cookedbd_tree_canopy_3;
    try {
        if (typeof response === "object" && !response.nodeType) {
            // Case JSONP/GeoJSON
            features_cookedbd_tree_canopy_3 = format_cookedbd_tree_canopy_3.readFeatures(response);
        } else {
            // Case XML string o DOM
            var parser = new DOMParser();
            var xmlDoc = (typeof response === "string")
                ? parser.parseFromString(response, "text/xml")
                : response;

            // Find GML version from tags
            var gmlFormat;
            if (xmlDoc.getElementsByTagName("gml:featureMember").length > 0) {
                // GML2
                gmlFormat = new ol.format.GML2();
            } else if (xmlDoc.getElementsByTagName("gml:featureMembers").length > 0 ||
                    xmlDoc.getElementsByTagName("gml:FeatureCollection").length > 0) {
                // GML3
                gmlFormat = new ol.format.GML3();
            } else {
                // Fallback generico
                gmlFormat = new ol.format.WFS();
            }

            features_cookedbd_tree_canopy_3 = gmlFormat.readFeatures(xmlDoc, {
                dataProjection: 'EPSG:3857',
                featureProjection: map.getView().getProjection()
            });
        }

        if (features_cookedbd_tree_canopy_3 && features_cookedbd_tree_canopy_3.length > 0) {
            jsonSource_cookedbd_tree_canopy_3.addFeatures(features_cookedbd_tree_canopy_3);
        } else {
            lyr_cookedbd_tree_canopy_3.set('title', '<i class="fa-regular fa-triangle-exclamation" title="Parsing Error"></i> ' + lyr_cookedbd_tree_canopy_3.get('title'));
            console.warn("No features loaded for cookedbd_tree_canopy_3");
        }
    } catch (e) {
        console.error("Error parsing WFS for cookedbd_tree_canopy_3:", e);
    }
});
var format_cookedbd_wetland_4 = new ol.format.GeoJSON();
var jsonSource_cookedbd_wetland_4 = new ol.source.Vector({
    attributions: ' ',
});
var lyr_cookedbd_wetland_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_cookedbd_wetland_4, 
                style: style_cookedbd_wetland_4,
                popuplayertitle: 'cooked:bd_wetland',
                interactive: true,
                title: '<img src="styles/legend/cookedbd_wetland_4.png" /> cooked:bd_wetland'
            });

fetchWFScookedbd_wetland_4Data(lyr_cookedbd_wetland_4.get('title'), function (error, response) {
    var features_cookedbd_wetland_4;
    try {
        if (typeof response === "object" && !response.nodeType) {
            // Case JSONP/GeoJSON
            features_cookedbd_wetland_4 = format_cookedbd_wetland_4.readFeatures(response);
        } else {
            // Case XML string o DOM
            var parser = new DOMParser();
            var xmlDoc = (typeof response === "string")
                ? parser.parseFromString(response, "text/xml")
                : response;

            // Find GML version from tags
            var gmlFormat;
            if (xmlDoc.getElementsByTagName("gml:featureMember").length > 0) {
                // GML2
                gmlFormat = new ol.format.GML2();
            } else if (xmlDoc.getElementsByTagName("gml:featureMembers").length > 0 ||
                    xmlDoc.getElementsByTagName("gml:FeatureCollection").length > 0) {
                // GML3
                gmlFormat = new ol.format.GML3();
            } else {
                // Fallback generico
                gmlFormat = new ol.format.WFS();
            }

            features_cookedbd_wetland_4 = gmlFormat.readFeatures(xmlDoc, {
                dataProjection: 'EPSG:3857',
                featureProjection: map.getView().getProjection()
            });
        }

        if (features_cookedbd_wetland_4 && features_cookedbd_wetland_4.length > 0) {
            jsonSource_cookedbd_wetland_4.addFeatures(features_cookedbd_wetland_4);
        } else {
            lyr_cookedbd_wetland_4.set('title', '<i class="fa-regular fa-triangle-exclamation" title="Parsing Error"></i> ' + lyr_cookedbd_wetland_4.get('title'));
            console.warn("No features loaded for cookedbd_wetland_4");
        }
    } catch (e) {
        console.error("Error parsing WFS for cookedbd_wetland_4:", e);
    }
});
var format_cookedbd_urban_development_zone_5 = new ol.format.GeoJSON();
var jsonSource_cookedbd_urban_development_zone_5 = new ol.source.Vector({
    attributions: ' ',
});
var lyr_cookedbd_urban_development_zone_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_cookedbd_urban_development_zone_5, 
                style: style_cookedbd_urban_development_zone_5,
                popuplayertitle: 'cooked:bd_urban_development_zone',
                interactive: true,
                title: '<img src="styles/legend/cookedbd_urban_development_zone_5.png" /> cooked:bd_urban_development_zone'
            });

fetchWFScookedbd_urban_development_zone_5Data(lyr_cookedbd_urban_development_zone_5.get('title'), function (error, response) {
    var features_cookedbd_urban_development_zone_5;
    try {
        if (typeof response === "object" && !response.nodeType) {
            // Case JSONP/GeoJSON
            features_cookedbd_urban_development_zone_5 = format_cookedbd_urban_development_zone_5.readFeatures(response);
        } else {
            // Case XML string o DOM
            var parser = new DOMParser();
            var xmlDoc = (typeof response === "string")
                ? parser.parseFromString(response, "text/xml")
                : response;

            // Find GML version from tags
            var gmlFormat;
            if (xmlDoc.getElementsByTagName("gml:featureMember").length > 0) {
                // GML2
                gmlFormat = new ol.format.GML2();
            } else if (xmlDoc.getElementsByTagName("gml:featureMembers").length > 0 ||
                    xmlDoc.getElementsByTagName("gml:FeatureCollection").length > 0) {
                // GML3
                gmlFormat = new ol.format.GML3();
            } else {
                // Fallback generico
                gmlFormat = new ol.format.WFS();
            }

            features_cookedbd_urban_development_zone_5 = gmlFormat.readFeatures(xmlDoc, {
                dataProjection: 'EPSG:3857',
                featureProjection: map.getView().getProjection()
            });
        }

        if (features_cookedbd_urban_development_zone_5 && features_cookedbd_urban_development_zone_5.length > 0) {
            jsonSource_cookedbd_urban_development_zone_5.addFeatures(features_cookedbd_urban_development_zone_5);
        } else {
            lyr_cookedbd_urban_development_zone_5.set('title', '<i class="fa-regular fa-triangle-exclamation" title="Parsing Error"></i> ' + lyr_cookedbd_urban_development_zone_5.get('title'));
            console.warn("No features loaded for cookedbd_urban_development_zone_5");
        }
    } catch (e) {
        console.error("Error parsing WFS for cookedbd_urban_development_zone_5:", e);
    }
});

lyr_cookedbd_marine_protected_areas_0.setVisible(true);lyr_cookedbd_biodiversity_network_1.setVisible(true);lyr_cookedbd_shot_hole_boer_Beetle_2.setVisible(true);lyr_cookedbd_tree_canopy_3.setVisible(true);lyr_cookedbd_wetland_4.setVisible(true);lyr_cookedbd_urban_development_zone_5.setVisible(true);
var layersList = [lyr_cookedbd_marine_protected_areas_0,lyr_cookedbd_biodiversity_network_1,lyr_cookedbd_shot_hole_boer_Beetle_2,lyr_cookedbd_tree_canopy_3,lyr_cookedbd_wetland_4,lyr_cookedbd_urban_development_zone_5];
lyr_cookedbd_marine_protected_areas_0.set('fieldAliases', {'FID_BSP_MP': 'FID_BSP_MP', 'Quick_Ref': 'Quick_Ref', 'Category': 'Category', 'NEMPAA': 'NEMPAA', 'Type': 'Type', 'Legalcat': 'Legalcat', 'Area_u34s': 'Area_u34s', 'Comment': 'Comment', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_cookedbd_biodiversity_network_1.set('fieldAliases', {'DATE_GRND_': 'DATE_GRND_', 'AREA_HCTR': 'AREA_HCTR', 'PRMT_MTR': 'PRMT_MTR', 'CBA_Catego': 'CBA_Catego', 'CBA_Name_': 'CBA_Name_', 'Subtype': 'Subtype', 'SDF': 'SDF', 'Descriptio': 'Descriptio', 'Significan': 'Significan', 'Objective': 'Objective', 'ACTION': 'ACTION', 'Compat_Act': 'Compat_Act', 'Grndtruth': 'Grndtruth', 'CESA_Signi': 'CESA_Signi', 'PA_Name': 'PA_Name', 'Proclaimed': 'Proclaimed', 'Managed': 'Managed', 'Primary_Cl': 'Primary_Cl', 'Secondary_': 'Secondary_', 'Tertiary_': 'Tertiary_', 'Legislatio': 'Legislatio', 'CORR_NAME': 'CORR_NAME', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_cookedbd_shot_hole_boer_Beetle_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'DATE': 'DATE', 'SPCS': 'SPCS', 'CMN_NAME': 'CMN_NAME', 'DMTR_BRST_': 'DMTR_BRST_', 'NMBR_HOLE': 'NMBR_HOLE', 'TREE_CNDT': 'TREE_CNDT', 'INDG_ALN': 'INDG_ALN', 'TREE_SPCS_': 'TREE_SPCS_', 'STS': 'STS', 'RSN_NON_RM': 'RSN_NON_RM', 'RMVL_DATE': 'RMVL_DATE', 'Y': 'Y', 'X': 'X', });
lyr_cookedbd_tree_canopy_3.set('fieldAliases', {'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_cookedbd_wetland_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'WTLN_ID': 'WTLN_ID', 'WTLN_NAME': 'WTLN_NAME', 'ANTH_TYPE': 'ANTH_TYPE', 'CBA_CTGR': 'CBA_CTGR', 'LVL_1': 'LVL_1', 'LVL_2': 'LVL_2', 'LVL_3': 'LVL_3', 'LVL_4A': 'LVL_4A', 'LVL_4B': 'LVL_4B', 'LVL_4C': 'LVL_4C', 'LVL_5A': 'LVL_5A', 'LVL_5B': 'LVL_5B', 'LVL_5C': 'LVL_5C', 'LVL_6A': 'LVL_6A', 'LVL_6B': 'LVL_6B', 'LVL_6C': 'LVL_6C', 'LVL_6E': 'LVL_6E', 'VGTN_INDG_': 'VGTN_INDG_', 'VGTN_ALN_C': 'VGTN_ALN_C', 'SBST': 'SBST', 'SLNT': 'SLNT', 'PH': 'PH', 'PES': 'PES', 'EIS': 'EIS', 'IMPC': 'IMPC', 'IMPC_CMNT': 'IMPC_CMNT', 'CMNT': 'CMNT', 'EXPR_RVWR': 'EXPR_RVWR', 'TO_GRND_TR': 'TO_GRND_TR', 'GRND_TRTH_': 'GRND_TRTH_', 'DATE_GRND_': 'DATE_GRND_', 'MAP_CNFD': 'MAP_CNFD', 'AREA_HCTR': 'AREA_HCTR', 'PRMT_MTR': 'PRMT_MTR', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_cookedbd_urban_development_zone_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'CMNT': 'CMNT', 'STS': 'STS', 'AREA_HCTR': 'AREA_HCTR', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_cookedbd_marine_protected_areas_0.set('fieldImages', {'FID_BSP_MP': 'TextEdit', 'Quick_Ref': 'TextEdit', 'Category': 'TextEdit', 'NEMPAA': 'TextEdit', 'Type': 'TextEdit', 'Legalcat': 'TextEdit', 'Area_u34s': 'TextEdit', 'Comment': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_cookedbd_biodiversity_network_1.set('fieldImages', {'DATE_GRND_': 'DateTime', 'AREA_HCTR': 'TextEdit', 'PRMT_MTR': 'TextEdit', 'CBA_Catego': 'TextEdit', 'CBA_Name_': 'TextEdit', 'Subtype': 'TextEdit', 'SDF': 'TextEdit', 'Descriptio': 'TextEdit', 'Significan': 'TextEdit', 'Objective': 'TextEdit', 'ACTION': 'TextEdit', 'Compat_Act': 'TextEdit', 'Grndtruth': 'TextEdit', 'CESA_Signi': 'TextEdit', 'PA_Name': 'TextEdit', 'Proclaimed': 'TextEdit', 'Managed': 'TextEdit', 'Primary_Cl': 'TextEdit', 'Secondary_': 'TextEdit', 'Tertiary_': 'TextEdit', 'Legislatio': 'TextEdit', 'CORR_NAME': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_cookedbd_shot_hole_boer_Beetle_2.set('fieldImages', {'OBJECTID': 'Range', 'DATE': 'DateTime', 'SPCS': 'TextEdit', 'CMN_NAME': 'TextEdit', 'DMTR_BRST_': 'TextEdit', 'NMBR_HOLE': 'TextEdit', 'TREE_CNDT': 'TextEdit', 'INDG_ALN': 'TextEdit', 'TREE_SPCS_': 'TextEdit', 'STS': 'TextEdit', 'RSN_NON_RM': 'TextEdit', 'RMVL_DATE': 'DateTime', 'Y': 'TextEdit', 'X': 'TextEdit', });
lyr_cookedbd_tree_canopy_3.set('fieldImages', {'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_cookedbd_wetland_4.set('fieldImages', {'OBJECTID': 'Range', 'WTLN_ID': 'TextEdit', 'WTLN_NAME': 'TextEdit', 'ANTH_TYPE': 'Range', 'CBA_CTGR': 'Range', 'LVL_1': 'Range', 'LVL_2': 'Range', 'LVL_3': 'Range', 'LVL_4A': 'Range', 'LVL_4B': 'Range', 'LVL_4C': 'Range', 'LVL_5A': 'Range', 'LVL_5B': 'Range', 'LVL_5C': 'Range', 'LVL_6A': 'Range', 'LVL_6B': 'Range', 'LVL_6C': 'Range', 'LVL_6E': 'Range', 'VGTN_INDG_': 'TextEdit', 'VGTN_ALN_C': 'TextEdit', 'SBST': 'Range', 'SLNT': 'Range', 'PH': 'Range', 'PES': 'Range', 'EIS': 'Range', 'IMPC': 'Range', 'IMPC_CMNT': 'TextEdit', 'CMNT': 'TextEdit', 'EXPR_RVWR': 'TextEdit', 'TO_GRND_TR': 'Range', 'GRND_TRTH_': 'TextEdit', 'DATE_GRND_': 'TextEdit', 'MAP_CNFD': 'Range', 'AREA_HCTR': 'TextEdit', 'PRMT_MTR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_cookedbd_urban_development_zone_5.set('fieldImages', {'OBJECTID': 'Range', 'CMNT': 'TextEdit', 'STS': 'TextEdit', 'AREA_HCTR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_cookedbd_marine_protected_areas_0.set('fieldLabels', {'FID_BSP_MP': 'no label', 'Quick_Ref': 'no label', 'Category': 'no label', 'NEMPAA': 'no label', 'Type': 'no label', 'Legalcat': 'no label', 'Area_u34s': 'no label', 'Comment': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_cookedbd_biodiversity_network_1.set('fieldLabels', {'DATE_GRND_': 'no label', 'AREA_HCTR': 'no label', 'PRMT_MTR': 'no label', 'CBA_Catego': 'no label', 'CBA_Name_': 'no label', 'Subtype': 'no label', 'SDF': 'no label', 'Descriptio': 'no label', 'Significan': 'no label', 'Objective': 'no label', 'ACTION': 'no label', 'Compat_Act': 'no label', 'Grndtruth': 'no label', 'CESA_Signi': 'no label', 'PA_Name': 'no label', 'Proclaimed': 'no label', 'Managed': 'no label', 'Primary_Cl': 'no label', 'Secondary_': 'no label', 'Tertiary_': 'no label', 'Legislatio': 'no label', 'CORR_NAME': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_cookedbd_shot_hole_boer_Beetle_2.set('fieldLabels', {'OBJECTID': 'no label', 'DATE': 'no label', 'SPCS': 'no label', 'CMN_NAME': 'no label', 'DMTR_BRST_': 'no label', 'NMBR_HOLE': 'no label', 'TREE_CNDT': 'no label', 'INDG_ALN': 'no label', 'TREE_SPCS_': 'no label', 'STS': 'no label', 'RSN_NON_RM': 'no label', 'RMVL_DATE': 'no label', 'Y': 'no label', 'X': 'no label', });
lyr_cookedbd_tree_canopy_3.set('fieldLabels', {'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_cookedbd_wetland_4.set('fieldLabels', {'OBJECTID': 'no label', 'WTLN_ID': 'no label', 'WTLN_NAME': 'no label', 'ANTH_TYPE': 'no label', 'CBA_CTGR': 'no label', 'LVL_1': 'no label', 'LVL_2': 'no label', 'LVL_3': 'no label', 'LVL_4A': 'no label', 'LVL_4B': 'no label', 'LVL_4C': 'no label', 'LVL_5A': 'no label', 'LVL_5B': 'no label', 'LVL_5C': 'no label', 'LVL_6A': 'no label', 'LVL_6B': 'no label', 'LVL_6C': 'no label', 'LVL_6E': 'no label', 'VGTN_INDG_': 'no label', 'VGTN_ALN_C': 'no label', 'SBST': 'no label', 'SLNT': 'no label', 'PH': 'no label', 'PES': 'no label', 'EIS': 'no label', 'IMPC': 'no label', 'IMPC_CMNT': 'no label', 'CMNT': 'no label', 'EXPR_RVWR': 'no label', 'TO_GRND_TR': 'no label', 'GRND_TRTH_': 'no label', 'DATE_GRND_': 'no label', 'MAP_CNFD': 'no label', 'AREA_HCTR': 'no label', 'PRMT_MTR': 'no label', 'Shape_Leng': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', });
lyr_cookedbd_urban_development_zone_5.set('fieldLabels', {'OBJECTID': 'inline label - visible with data', 'CMNT': 'no label', 'STS': 'no label', 'AREA_HCTR': 'no label', 'Shape_Leng': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', });
lyr_cookedbd_urban_development_zone_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});