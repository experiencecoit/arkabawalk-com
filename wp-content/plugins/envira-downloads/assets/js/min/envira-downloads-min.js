!function(a,e,i,n){function o(a){for(var e=a+"=",n=i.cookie.split(";"),o=0;o<n.length;o++){for(var r=n[o];" "==r.charAt(0);)r=r.substring(1);if(0==r.indexOf(e))return r.substring(e.length,r.length)}return""}a(i).on("envirabox_api_after_show",(function(i,n,r,l){var t=a("div.envirabox-slide--current img.envirabox-image").attr("src"),d=n.get_config("download_lightbox_force")?n.get_config("download_lightbox_force"):n.get_config("download_force"),s=!n.images,v=void 0===(v=l.gallery_id)&&void 0!==l.envirabox?l.envirabox:v;envira_gallery_album_id=!!s&&n.id,envira_gallery_item_id=void 0!==l.enviraItemId?l.enviraItemId:l.id,is_dynamic=void 0!==n.data.type&&"dynamic"==n.data.type||void 0!==n.data.dynamic&&""!==n.data.dynamic,envira_gallery_item_id=s?l.id:envira_gallery_item_id,void 0!==envira_gallery_item_id&&!1!==envira_gallery_item_id&&a(".envirabox-inner").on("click",".envira-download-button a",(function(a){if(a.preventDefault(),"1"==d&&void 0!==envira_gallery_item_id)if(("string"==typeof envira_gallery_item_id||envira_gallery_item_id instanceof String)&&!1!==envira_gallery_item_id.indexOf("folder_"))var i=location.protocol+"//"+location.host+location.pathname+"?envira-downloads-gallery-id="+v+"&envira-downloads-gallery-image="+t;else i=location.protocol+"//"+location.host+location.pathname+"?envira-downloads-gallery-id="+v+"&envira-downloads-gallery-image="+envira_gallery_item_id;else if(("string"==typeof envira_gallery_item_id||envira_gallery_item_id instanceof String)&&!1!==envira_gallery_item_id.indexOf("folder_"))i=location.protocol+"//"+location.host+location.pathname+"?force_download=false&envira-downloads-gallery-id="+v+"&envira-downloads-gallery-image="+t;else i=location.protocol+"//"+location.host+location.pathname+"?force_download=false&envira-downloads-gallery-id="+v+"&envira-downloads-gallery-image="+envira_gallery_item_id;if(is_dynamic&&(i+="&envira-dynamic=1"),s&&(i=i+"&envira-downloads-album-id="+envira_gallery_album_id),envira_downloads.password_protection){if(is_dynamic)var n=o("envira_password_protection_download_dynamic");else n=o("envira_password_protection_download_"+v);if(""==n){var r=prompt(envira_downloads.password_required);if(""==r)return!1}else r=n;if(null==r)return!1;l=i,_="envira_password_protection_download",c=encodeURIComponent(r),g=new RegExp("([?&])"+_+"=.*?(&|$)","i"),p=-1!==l.indexOf("?")?"&":"?",i=l.match(g)?l.replace(g,"$1"+_+"="+c+"$2"):l+p+_+"="+c}var l,_,c,g,p;"1"==d?e.open(i,"_self"):e.open(i,"_blank")}))})),a(".envira-gallery-item").on("click",".envira-download-button a",(function(i){if(i.preventDefault(),a(this).closest(".envira-gallery-wrap").hasClass("envira-dynamic-gallery"))var n="dynamic",r=a(this).attr("href"),l="true";else if(a(this).closest(".envirabox-wrap").hasClass("envira-dynamic-gallery")){var t=a("img.envirabox-image").attr("src"),d=a(this).parent().attr("data-envira-downloads-force-download"),s=(n=a("img.envirabox-image").data("envira-gallery-id"),a("img.envirabox-image").data("envira-item-id"));l="true";r="1"==d?location.protocol+"//"+location.host+location.pathname+"?envira-downloads-gallery-id="+n+"&envira-downloads-gallery-image="+s+"&envira-dynamic=1":t}else if("block"==a(".envirabox-container").css("display")){t=a("img.envirabox-image").attr("src"),d=a(this).parent().attr("data-envira-downloads-force-download"),n=a(".envirabox-container").data("envirabox-id"),s=a("img.envirabox-image").data("envira-item-id");r="1"==d?location.protocol+"//"+location.host+location.pathname+"?envira-downloads-gallery-id="+n+"&envira-downloads-gallery-image="+s:t}else r=a(this).attr("href"),n=a(this).closest(".envira-gallery-public").attr("id").split("-")[2];if(envira_downloads.password_protection){if(l)var v=o("envira_password_protection_download_dynamic");else v=o("envira_password_protection_download_"+n);if(""==v){var _=prompt(envira_downloads.password_required);if(""==_)return!1}else _=v;if(null==_)return!1;r+="&envira_password_protection_download="+encodeURIComponent(_)}return"1"==d?e.open(r,"_self"):e.open(r,"_blank"),!1})),a(".envira-gallery-wrap").on("click","a.envira-download-all",(function(i){i.preventDefault();var n=a(this).attr("href");if(a(this).closest(".envira-gallery-wrap").hasClass("envira-dynamic-gallery"))var r="dynamic",l=(n=a(this).attr("href"),"true");else if(void 0!==a(this).data("gallery-id")&&""!=a(this).data("gallery-id"))r=a(this).data("gallery-id");else{if(null==(r=function(a,i){i||(i=e.location.href);a=a.replace(/[\[\]]/g,"\\$&");var n=new RegExp("[?&]"+a+"(=([^&#]*)|&|#|$)").exec(i);if(!n)return null;if(!n[2])return"";return decodeURIComponent(n[2].replace(/\+/g," "))}("envira-downloads-gallery-id",n)))return!1}if(envira_downloads.password_protection){if(l)var t=o("envira_password_protection_download_dynamic");else t=o("envira_password_protection_download_"+r);if(""==t){var d=prompt(envira_downloads.password_required);if(""==d)return!1}else d=t;if(null==d)return!1;n+="&envira_password_protection_download="+d}return e.open(n,"_self"),!1})),a("div.envira-gallery-wrap").hasClass("envira-lightbox-theme-base_light")||a("div.envira-gallery-wrap").hasClass("envira-lightbox-theme-base_dark")?a("div.envira-download-button",a(this)).fadeIn().css("display","inline-block"):(a(i).on("mouseenter","div.envira-gallery-item-inner",(function(){a("div.envira-download-button",a(this)).fadeIn().css("display","inline-block")})),a(i).on("mouseleave","div.envira-gallery-item-inner",(function(){a("div.envira-download-button",a(this)).hide()})))}(jQuery,window,document,envira_gallery);