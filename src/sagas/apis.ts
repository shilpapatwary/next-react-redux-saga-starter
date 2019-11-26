import fetch from 'isomorphic-unfetch';
export async function getSampleContent(){
  const response = await fetch('https://api.myjson.com/bins/cdxq0');
  const body = await response.json(); 
  if (response.status !== 200) throw Error(body.message);
return body;
}