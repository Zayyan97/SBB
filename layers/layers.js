var wms_layers = [];


        var lyr_GoogleTerrain_0 = new ol.layer.Tile({
            'title': 'Google Terrain',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_PL_SBB_Full_2 = new ol.format.GeoJSON();
var features_PL_SBB_Full_2 = format_PL_SBB_Full_2.readFeatures(json_PL_SBB_Full_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PL_SBB_Full_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PL_SBB_Full_2.addFeatures(features_PL_SBB_Full_2);
var lyr_PL_SBB_Full_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PL_SBB_Full_2, 
                style: style_PL_SBB_Full_2,
                interactive: true,
    title: 'PL_SBB_Full<br />\
    <img src="styles/legend/PL_SBB_Full_2_0.png" /> Bangunan Lain<br />\
    <img src="styles/legend/PL_SBB_Full_2_1.png" /> Fasilitas Umum/Fasilitas Sosial<br />\
    <img src="styles/legend/PL_SBB_Full_2_2.png" /> Hutan<br />\
    <img src="styles/legend/PL_SBB_Full_2_3.png" /> Jalan<br />\
    <img src="styles/legend/PL_SBB_Full_2_4.png" /> Kuburan<br />\
    <img src="styles/legend/PL_SBB_Full_2_5.png" /> Pelabuhan<br />\
    <img src="styles/legend/PL_SBB_Full_2_6.png" /> Perdagangan Jasa<br />\
    <img src="styles/legend/PL_SBB_Full_2_7.png" /> Perkantoran<br />\
    <img src="styles/legend/PL_SBB_Full_2_8.png" /> Perkebunan<br />\
    <img src="styles/legend/PL_SBB_Full_2_9.png" /> Perumahan Teratur<br />\
    <img src="styles/legend/PL_SBB_Full_2_10.png" /> Perumahan Tidak Teratur<br />\
    <img src="styles/legend/PL_SBB_Full_2_11.png" /> Pesisir Pantai<br />\
    <img src="styles/legend/PL_SBB_Full_2_12.png" /> Sabana<br />\
    <img src="styles/legend/PL_SBB_Full_2_13.png" /> Sawah<br />\
    <img src="styles/legend/PL_SBB_Full_2_14.png" /> Semak/Belukar<br />\
    <img src="styles/legend/PL_SBB_Full_2_15.png" /> Sungai/Tubuh Air<br />\
    <img src="styles/legend/PL_SBB_Full_2_16.png" /> Tanah Kosong<br />\
    <img src="styles/legend/PL_SBB_Full_2_17.png" /> Tegalan/Ladang<br />\
    <img src="styles/legend/PL_SBB_Full_2_18.png" /> Tempat Peribadatan<br />\
    <img src="styles/legend/PL_SBB_Full_2_19.png" /> <br />'
        });

lyr_GoogleTerrain_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_PL_SBB_Full_2.setVisible(true);
var layersList = [lyr_GoogleTerrain_0,lyr_OSMStandard_1,lyr_PL_SBB_Full_2];
lyr_PL_SBB_Full_2.set('fieldAliases', {'Id': 'Id', 'PL': 'PL', 'layer': 'layer', 'path': 'path', });
lyr_PL_SBB_Full_2.set('fieldImages', {'Id': 'TextEdit', 'PL': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_PL_SBB_Full_2.set('fieldLabels', {'Id': 'no label', 'PL': 'inline label', 'layer': 'no label', 'path': 'no label', });
lyr_PL_SBB_Full_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});