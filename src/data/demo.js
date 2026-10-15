import hero from '../assets/hero.jpg.asset.json';
import residence from '../assets/residence.jpg.asset.json';
import office from '../assets/office.jpg.asset.json';
import house from '../assets/house.jpg.asset.json';
import construction from '../assets/construction.jpg.asset.json';
import building from '../assets/building.jpg.asset.json';
import interior from '../assets/interior.jpg.asset.json';
import structure from '../assets/structure.jpg.asset.json';
import detail from '../assets/detail.jpg.asset.json';
import renovation from '../assets/renovation.jpg.asset.json';
export const images = Object.fromEntries(Object.entries({hero,residence,office,house,construction,building,interior,structure,detail,renovation}).map(([k,v])=>[k,v.url]));
export const paths = ['/', '/about', '/services', '/projects', '/gallery', '/contact'];
export const defaultData = {
 company: { name:'INFRAVISION BUILDCON LLP', description:'INFRAVISION BUILDCON LLP is focused on building construction, combining thoughtful planning, practical execution, and attention to detail to create dependable spaces. Our approach emphasizes construction quality, safety awareness, clear communication, and professional project coordination.', phone:'5135453235',email:'infravision@gmail.com',address:'' },
 hero:{heading:'Building Tomorrow. Constructing Excellence.',text:'INFRAVISION BUILDCON LLP delivers quality-driven building construction solutions with a commitment to structural integrity, professional execution, and lasting value.',primaryLabel:'Explore Our Projects',secondaryLabel:'Request a Quote',image:images.hero},
 about:{heading:'Building with Vision. Delivering with Quality.',image:images.construction,text:'INFRAVISION BUILDCON LLP is focused on building construction, combining thoughtful planning, practical execution, and attention to detail to create dependable spaces. Our approach emphasizes construction quality, safety awareness, clear communication, and professional project coordination.'},
 services:[
  {id:'s1',title:'Residential Building Construction',description:'Construction solutions for houses, villas, and residential buildings.',image:images.residence},
  {id:'s2',title:'Commercial Building Construction',description:'Construction planning and execution for offices, shops, and commercial spaces.',image:images.building},
  {id:'s3',title:'Building Structural Work',description:'Building structure-related construction work, with emphasis on quality and execution.',image:images.structure},
  {id:'s4',title:'Renovation & Remodeling',description:'Improvements and upgrades for existing buildings.',image:images.interior},
  {id:'s5',title:'Construction Project Coordination',description:'Organized coordination of construction activities and project milestones.',image:images.renovation},
  {id:'s6',title:'Civil Construction Work',description:'General civil construction and building-related work.',image:images.construction}
 ].map(x=>({...x,visible:true})),
 projects:[
  {id:'p1',title:'Modern Residential Building',category:'Residential',image:images.residence,description:'A contemporary residential concept balancing clean architectural lines, light-filled spaces, and thoughtful material choices.',status:'Concept'},
  {id:'p2',title:'Commercial Office Development',category:'Commercial',image:images.hero,description:'A commercial development concept with a distinctive glazed facade and a considered approach to professional workspaces.',status:'Concept'},
  {id:'p3',title:'Contemporary Urban Residence',category:'Residential',image:images.house,description:'An urban home concept combining indoor comfort, generous openings, and practical living spaces.',status:'Concept'},
  {id:'p4',title:'Multi-Storey Building Concept',category:'Commercial',image:images.building,description:'A multi-storey architectural study with emphasis on structure, circulation, and a coherent exterior.',status:'Concept'},
  {id:'p5',title:'Residential Renovation Project',category:'Renovation',image:images.interior,description:'A sample renovation study exploring natural materials, improved interiors, and updated finishes.',status:'Concept'},
  {id:'p6',title:'Commercial Property Concept',category:'Commercial',image:images.office,description:'A workplace concept focused on flexible spaces, contemporary finishes, and clear circulation.',status:'Concept'}
 ].map(x=>({...x,location:'',visible:true})),
 gallery:[['g1','Modern residential exterior','Residential','residence'],['g2','Construction site and coordination','Construction','construction'],['g3','Commercial glass architecture','Commercial','hero'],['g4','Contemporary living space','Interiors','interior'],['g5','Concrete structural work','Construction','structure'],['g6','Clean architectural lines','Commercial','detail'],['g7','Urban residential architecture','Residential','house'],['g8','Office interior finishing','Interiors','office'],['g9','Construction materials and workmanship','Construction','renovation']].map(([id,caption,category,key])=>({id,caption,category,image:images[key],visible:true})),
 testimonials:[{id:'t1',name:'Sample Testimonial — Demo Content',quote:'Thoughtful planning, clear communication, and attention to detail are the qualities we value in a construction partner.',approved:false,visible:true},{id:'t2',name:'Sample Testimonial — Demo Content',quote:'A dependable approach to building starts with understanding the requirements and coordinating every step with care.',approved:false,visible:true}],
 inquiries:[],
 navigation:paths.map((path,i)=>({id:'n'+i,path,label:['Home','About Us','Services','Projects','Gallery','Contact Us'][i],visible:true})),
 footer:{description:'Building with purpose. Delivering with integrity. Construction solutions shaped around your vision.',phone:'5135453235',email:'infravision@gmail.com',credit:'Designed and development by SOSynch Ai Tech',quickLinks:'Home, Services, Projects, Gallery, Contact Us'},
 settings:{title:'INFRAVISION BUILDCON LLP | Building Construction',description:'Quality-driven building construction, practical planning, and professional project coordination.',primary:'#202A35',accent:'#F28C28',muted:'#737B84',background:'#F4F5F6',about:true,services:true,projects:true,gallery:true,why:true,process:true,testimonials:true,contact:true},
 account:{username:'admin',password:'Admin@123'}
};
export const cloneDefaults=()=>JSON.parse(JSON.stringify(defaultData));
export const STORAGE_KEY='infravision-demo-v1';
export function readData(storage) {
 try { const raw=storage.getItem(STORAGE_KEY); if(!raw)return cloneDefaults(); const data=JSON.parse(raw); if(!data||typeof data!=='object')return cloneDefaults(); const base=cloneDefaults(); for(const key of Object.keys(base)){ if(Array.isArray(base[key])) { if(!Array.isArray(data[key]) || data[key].some(item=>!item || typeof item!=='object' || typeof item.id!=='string')) throw new Error('Invalid data'); base[key]=data[key]; } else if(data[key] && typeof data[key]==='object' && !Array.isArray(data[key]))base[key]={...base[key],...data[key]}; } return base; }catch{return cloneDefaults();}
}
export function safeImage(value){ return typeof value==='string' && (/^https?:\/\//i.test(value)||value.startsWith('/__l5e/assets-v1/')) ? value : ''; }
export function validPhone(value){return /^[+\d\s().-]{7,25}$/.test(value) && value.replace(/\D/g,'').length>=7;}
export function validEmail(value){return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);}
export const newId=()=>globalThis.crypto?.randomUUID?.() || 'id-'+Date.now()+'-'+Math.random().toString(36).slice(2);
