var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

var URL_MOST_WATCHED_MOVIES="/ajax/mostWatchedMovies";var URL_STAFF_PICKS_MOVIES="/ajax/staffPicksMovies";var URL_MOST_SHARED_MOVIES="/ajax/mostSharedMovies";var URL_TOP_SCORED_MOVIES="/ajax/topScoredMovies";function switchIndexTab(G){var F=G.split(",");var E=F[0].split("-");var B=F[1];var C=F[2];var D=0;var A;switch(B){case"staffpicks":A=URL_STAFF_PICKS_MOVIES+"/"+C+"/"+D+"/0/all/thumb/homepage";break;case"mostrecent":A=URL_MOST_SHARED_MOVIES+"/"+C+"/"+D+"/30/all/thumb/homepage";break;case"mostpopular":A=URL_TOP_SCORED_MOVIES+"/"+C+"/"+D+"/30/all/thumb/homepage";break;case"mostviewed":A=URL_MOST_WATCHED_MOVIES+"/"+C+"/"+D+"/30/all/thumb/homepage";break}if($(E[0]).innerHTML==""||$(E[0]).innerHTML=="Loading..."){new Ajax.Request(A,{method:"post",onSuccess:function(I){var H=I.responseText;parseResponse(H);if(responseArray.code=="0"){$(E[0]).innerHTML=responseArray.html}else{displayFeedback(responseArray.code+responseArray.json.error)}resetResponse()},onFailure:function(){displayFeedback("1Error contacting the server")}})}for(i=1;i<E.length;i++){$(E[i]).hide()}$(E[0]).show()}var jtw_divname="jtw_widget1";var jtw_width="0px";var jtw_height="0px";var jtw_scroll="yes";var jtw_widget_background="#eee";var jtw_widget_border="1px #aaa";var jtw_center_widget="yes";var jtw_tweet_textcolor="";var jtw_tweet_background="#eee";var jtw_tweet_newbackground="";var jtw_tweet_border="0px";var jtw_tweet_margin="5px";var jtw_tweet_fontsize="11px";var jtw_hide_img="";var jtw_tweet_textcolor="#333";var jtw_tweet_linkcolor="#777";var jtw_widget_style_misc="font-family: verdana, arial, sans;";var jtw_pre_html="<nbsp;";var jtw_post_html="";var jtw_mid_html="";var jtw_num_tweets="100";var jtw_widget_refresh_interval="15";function claimBadge(A){jQuery.get("/ajax/claimBadge/"+A,function(C){parseResponse(C);if(responseArray.code=="0"){jQuery("#claim_badge_overlay_claim").hide();jQuery("#claim_badge_overlay_claimed").show();if(responseArray.json.gopoints_earned==0){jQuery("#claim_badge_overlay_claimed .gp").hide()}else{jQuery("#claim_badge_overlay_claimed .gp .points").text(responseArray.json.gopoints_earned)}if(responseArray.json.xp_earned==0){jQuery("#claim_badge_overlay_claimed .xp").hide()}else{jQuery("#claim_badge_overlay_claimed .xp .points").text(responseArray.json.xp_earned)}var B=responseArray.json.unclaim_badge_count;if(B>0){jQuery("#claim_badge_overlay_claimed .box_footer").show()}jQuery("#header_new_badge").text("("+B+")")}else{displayFeedback("1"+responseArray.json.error)}})};

}