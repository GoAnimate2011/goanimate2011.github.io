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

function set_cookie(B,G,I,F,H,J,E,A){var D=B+"="+escape(G);if(I){var C=new Date(I,F,H);D+="; expires="+C.toGMTString()}if(J){D+="; path="+escape(J)}if(E){D+="; domain="+escape(E)}if(A){D+="; secure"}document.cookie=D}function delete_cookie(B){var A=new Date();A.setTime(A.getTime()-1);document.cookie=B+="=; expires="+A.toGMTString()}function get_cookie(B){var A=document.cookie.match("(^|;) ?"+B+"=([^;]*)(;|$)");if(A){return(unescape(A[2]))}else{return null}};

}
