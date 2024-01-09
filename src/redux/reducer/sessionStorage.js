export const loadStore = (key , defaultValue)=>{
 try {
const cartSessionState =  sessionStorage.getItem(key);
if (cartSessionState === null) {
 return defaultValue;
}
return JSON.parse(cartSessionState)
 } catch (error) {
 return defaultValue;
  
 }
}
export const saved = (key , obj)=>{
 try {
  sessionStorage.setItem(key,JSON.stringify(obj))
 } catch (error) {
  
 }
}