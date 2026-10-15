import {createContext,useContext,useEffect,useRef,useState} from 'react';
import {Link} from '@tanstack/react-router';
import {cloneDefaults,readData,STORAGE_KEY,safeImage} from '../../data/demo';
const SiteContext=createContext(null);
export function SiteProvider({children}){
 const [data,setData]=useState(cloneDefaults),[ready,setReady]=useState(false),[session,setSession]=useState(false),[notice,setNotice]=useState('');
 useEffect(()=>{setData(readData(localStorage));try{setSession(localStorage.getItem('infravision-admin')==='demo');}catch{}setReady(true);},[]);
 useEffect(()=>{if(!ready)return;try{localStorage.setItem(STORAGE_KEY,JSON.stringify(data));}catch{setNotice('Browser storage is unavailable or full. Your changes will not survive a refresh.');}},[data,ready]);
 useEffect(()=>{if(!ready)return;const styles=document.documentElement.style;const mapping={primary:'--primary',accent:'--accent',muted:'--muted-foreground',background:'--background'};for(const [key,token] of Object.entries(mapping)){if(/^#[a-f\d]{6}$/i.test(data.settings[key]))styles.setProperty(token,data.settings[key]);}document.title=data.settings.title;},[data.settings,ready]);
 useEffect(()=>{function sync(event){if(event.key===STORAGE_KEY)setData(readData(localStorage));if(event.key==='infravision-admin')setSession(event.newValue==='demo');}window.addEventListener('storage',sync);return()=>window.removeEventListener('storage',sync);},[]);
 const login=()=>{setSession(true);try{localStorage.setItem('infravision-admin','demo');}catch{}};
 const logout=()=>{setSession(false);try{localStorage.removeItem('infravision-admin');}catch{}};
 const update=(key,value)=>setData(prev=>({...prev,[key]:typeof value==='function'?value(prev[key]):value}));
 const restore=()=>{setData(cloneDefaults());logout();};
 return <SiteContext.Provider value={{data,ready,session,login,logout,update,restore,notice}}>{children}{notice&&<div role="alert" className="storage-notice">{notice}</div>}</SiteContext.Provider>;
}
export const useSite=()=>useContext(SiteContext);
export function Button({children,variant='primary',className='',...props}){return <button className={`btn btn-${variant} ${className}`} {...props}>{children}</button>;}
export function ActionLink({children,to,variant='primary',className='',...props}){return <Link to={to} className={`btn btn-${variant} ${className}`} {...props}>{children}</Link>;}
export function Arrow({diagonal=false}){return <span aria-hidden="true" className="arrow">{diagonal?'↗':'↗'}</span>;}
export function Photo({src,alt,className='',eager=false}){const [failed,setFailed]=useState(false);useEffect(()=>setFailed(false),[src]);const url=safeImage(src);return <div className={`photo ${className}`}>{!failed&&url?<img src={url} alt={alt} loading={eager?'eager':'lazy'} onError={()=>setFailed(true)}/>:<div className="photo-fallback" role="img" aria-label={alt}><span className="fallback-building">▥</span><span>{alt}</span></div>}</div>;}
export function Modal({title,children,onClose,className=''}){
 const ref=useRef(null);useEffect(()=>{const dialog=ref.current;dialog?.showModal();const old=document.body.style.overflow;document.body.style.overflow='hidden';return()=>{document.body.style.overflow=old;};},[]);
 return <dialog ref={ref} className={`modal ${className}`} onCancel={onClose} onClick={e=>{if(e.target===e.currentTarget)onClose();}}><div className="modal-heading"><h2>{title}</h2><Button variant="icon" aria-label="Close dialog" onClick={onClose}>×</Button></div>{children}</dialog>;
}
export function Eyebrow({children,light=false}){return <div className={`eyebrow ${light?'eyebrow-light':''}`}><span/>{children}</div>;}
export function Empty({children}){return <div className="empty-state"><span aria-hidden="true">□</span><p>{children}</p></div>;}
export function PublicLayout({children,page}){
 const {data}=useSite(),[open,setOpen]=useState(false);
 useEffect(()=>setOpen(false),[page]);
 return <><header className="site-header"><div className="header-inner"><Link to="/" className="brand" aria-label={data.company.name+' home'}><span className="brand-mark" aria-hidden="true"><i/><i/><i/></span><span><strong>{data.company.name.replace(/ BUILDCON LLP$/,'')}</strong><small>{data.company.name.endsWith('BUILDCON LLP')?'BUILDCON LLP':'BUILDING & INFRASTRUCTURE'}</small></span></Link><nav aria-label="Main navigation" className={open?'main-nav open':'main-nav'}>{data.navigation.filter(n=>n.visible).map(n=><Link key={n.id} to={n.path} className={page===n.path?'nav-link active':'nav-link'}>{n.label}</Link>)}</nav><ActionLink to="/contact" className="header-quote">Request a Quote <Arrow/></ActionLink><Button variant="icon" className="menu-toggle" aria-label={open?'Close menu':'Open menu'} aria-expanded={open} onClick={()=>setOpen(!open)}>{open?'×':'☰'}</Button></div></header><main>{children}</main><Footer/></>;
}
function Footer(){const {data}=useSite();const nav=data.navigation;const quick=data.footer.quickLinks.split(',').map(x=>x.trim()).filter(Boolean);return <footer className="site-footer"><div className="container footer-grid"><div><Link to="/" className="footer-brand">{data.company.name}</Link><p>{data.footer.description}</p><Link to="/about" className="text-link">More about us <Arrow/></Link></div><div><h3>Quick Links</h3>{quick.map((label,i)=>{const n=nav.find(n=>n.label.toLowerCase()===label.toLowerCase())||nav.find(n=>n.path===['/','/services','/projects','/gallery','/contact'][i]);return n?<Link key={i} to={n.path}>{label}</Link>:null;})}</div><div><h3>Our Services</h3>{['Residential Construction','Commercial Construction','Structural Work','Renovation'].map(label=><Link key={label} to="/services">{label}</Link>)}</div><div><h3>Let’s build something.</h3><a href={'tel:'+data.footer.phone.replace(/[^+\d]/g,'')}>{data.footer.phone} <Arrow/></a><a href={'mailto:'+data.footer.email}>{data.footer.email} <Arrow/></a>{data.company.address&&<p>{data.company.address}</p>}<div className="footer-contact-line">Building construction & infrastructure</div></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} {data.company.name}. All rights reserved.</span><span>{data.footer.credit}</span><Link to="/admin/login">Admin Login <span aria-hidden="true">↗</span></Link></div></footer>;}
