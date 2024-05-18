// Colégio Eleitoral
var estado = 0
var total = 50

var evD = 0
var evR = 0
var evL = 0

var evDpercent = 0
var evRpercent = 0
var evLpercent = 0

var senps = 2
var evDC = 3
var evME = 2+senps
var evNH = 2+senps
var evRI = 2+senps
var evMA = 9+senps
var evCT = 5+senps
var evVT = 1+senps
var evNJ = 12+senps
var evNY = 26+senps
var evPA = 17+senps
var evMD = 8+senps
var evDE = 1+senps
var evVA = 11+senps
var evWV = 2+senps
var evNC = 14+senps
var evSC = 7+senps
var evGA = 14+senps
var evFL = 28+senps
var evOH = 15+senps
var evKY = 6+senps
var evTN = 9+senps
var evAL = 7+senps
var evMI = 13+senps
var evIN = 9+senps
var evMS = 4+senps
var evWI = 8+senps
var evIL = 17+senps
var evMN = 8+senps
var evIA = 4+senps
var evMO = 8+senps
var evAR = 4+senps
var evLA = 6+senps
var evND = 1+senps
var evSD = 1+senps
var evNE = 3+senps
var evKS = 4+senps
var evOK = 5+senps
var evTX = 38+senps
var evWY = 1+senps
var evCO = 8+senps
var evNM = 3+senps
var evMT = 2+senps
var evID = 2+senps
var evUT = 4+senps
var evAZ = 9+senps
var evNV = 4+senps
var evWA = 10+senps
var evOR = 6+senps
var evCA = 52+senps
var evAK = 1+senps
var evHI = 2+senps
var contest = 0

// Standard Normal variate using Box-Muller transform.
function gauss(mean=0, stdev=1) {
    var v = Math.random();
    var u = 1 - Math.random(); // Converting [0,1) to (0,1]
    var z = Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );
    var popular = z * stdev + mean
    if(popular<0){
        return -popular;
    }else
    // Transform to the desired mean and standard deviation:
    return popular;
}
// Estatísticas
var pop = {al: 2123372, ak: 318608, az: 2604657, ar: 1130676, ca: 14181595, co: 2780247, ct: 1644920, de: 443814, dc: 311268, fl: 9420039, ga: 4114732, hi: 428937, id: 690255, il: 5536424, in: 2734958, ia: 1566031, ks: 1184402, ky: 1924149, la: 2029032, me: 747927, md: 2781446, ma: 3325046, mi: 4799284, mn: 2944813, ms: 1209357, mo: 2808605, mt: 497147, ne: 844227, nv: 1125385, nh: 744296, nj: 3874046, nm: 798319, ny: 7721453, nc: 4741564, nd: 344360, oh: 5496487, ok: 1452992, or: 2001336, pa: 6165478, ri: 464144, sc: 2103027, sd: 370093, tn: 2508027, tx: 8969226, ut: 1131430, vt: 315067, va: 3984631, wa: 3317019, wv: 714423, wi: 2976150, wy: 255849};
var demmean = {al: 0.3436, ak: 0.3655, az: 0.4458, ar: 0.3365, ca: 0.6173, co: 0.4816, ct: 0.5457, de: 0.5309, dc: 0.8686, fl: 0.4782, ga: 0.4564, hi: 0.6222, id: 0.2749, il: 0.5583, in: 0.3791, ia: 0.4174, ks: 0.3605, ky: 0.3268, la: 0.3845, me: 0.4783, md: 0.6033, ma: 0.6001, mi: 0.4727, mn: 0.4644, ms: 0.4006, mo: 0.3814, mt: 0.3575, ne: 0.3370, nv: 0.4792, nh: 0.4698, nj: 0.5545, nm: 0.4826, ny: 0.5901, nc: 0.4617, nd: 0.2723, oh: 0.4356, ok: 0.2893, or: 0.5007, pa: 0.4746, ri: 0.5441, sc: 0.4067, sd: 0.3174, tn: 0.3472, tx: 0.4324, ut: 0.2746, vt: 0.5668, va: 0.4973, wa: 0.5254, wv: 0.2643, wi: 0.4645, wy: 0.2188};
var repmean = {al: 0.6208, ak: 0.5128, az: 0.4808, ar: 0.6057, ca: 0.3162, co: 0.4325, ct: 0.4093, de: 0.4172, dc: 0.0809, fl: 0.4902, ga: 0.5077, hi: 0.3003, id: 0.5926, il: 0.3876, in: 0.5682, ia: 0.5115, ks: 0.5665, ky: 0.6252, la: 0.5809, me: 0.4487, md: 0.3391, ma: 0.3281, mi: 0.4750, mn: 0.4492, ms: 0.5786, mo: 0.5677, mt: 0.5617, ne: 0.5875, nv: 0.4550, nh: 0.4661, nj: 0.4135, nm: 0.4004, ny: 0.3652, nc: 0.4983, nd: 0.6296, oh: 0.5169, ok: 0.6532, or: 0.3909, pa: 0.4818, ri: 0.3890, sc: 0.5494, sd: 0.6153, tn: 0.6072, tx: 0.5223, ut: 0.4554, vt: 0.3027, va: 0.4441, wa: 0.3683, wv: 0.6850, wi: 0.4722, wy: 0.6817};
var libmean = {al: 0.0209, ak: 0.0588, az: 0.0408, ar: 0.0264, ca: 0.0337, co: 0.0518, ct: 0.0296, de: 0.0332, dc: 0.0157, fl: 0.0220, ga: 0.0305, hi: 0.0372, id: 0.0410, il: 0.0379, in: 0.0489, ia: 0.0378, ks: 0.0468, ky: 0.0279, la: 0.0187, me: 0.0509, md: 0.0286, ma: 0.0415, mi: 0.0359, mn: 0.0384, ms: 0.0119, mo: 0.0347, mt: 0.0564, ne: 0.0461, nv: 0.0329, nh: 0.0415, nj: 0.0187, nm: 0.0934, ny: 0.0229, nc: 0.0274, nd: 0.0622, oh: 0.0317, ok: 0.0575, or: 0.0471, pa: 0.0238, ri: 0.0318, sc: 0.0234, sd: 0.0563, tn: 0.0281, tx: 0.0316, ut: 0.035, vt: 0.032, va: 0.0297, wa: 0.0485, wv: 0.0322, wi: 0.0358, wy: 0.0519};
var fedmean = {al: 0.0044, ak: 0.0180, az: 0.0132, ar: 0.0084, ca: 0.0196, co: 0.0138, ct: 0.0139, de: 0.0137, dc: 0.0136, fl: 0.0068, ga: 0.0019, hi: 0.0297, id: 0.0123, il: 0.0139, in: 0.0027, ia: 0.0073, ks: 0.0198, ky: 0.0072, la: 0.0069, me: 0.0191, md: 0.0129, ma: 0.0143, mi: 0.0107, mn: 0.0126, ms: 0.0031, mo: 0.0091, mt: 0.0160, ne: 0.0104, nv: 0.0000, nh: 0.0088, nj: 0.0098, nm: 0.0124, ny: 0.0140, nc: 0.0026, nd: 0.0110, oh: 0.0084, ok: 0.0000, or: 0.0250, pa: 0.0081, ri: 0.0134, sc: 0.0062, sd: 0.0000, tn: 0.0064, tx: 0.0080, ut: 0.0083, vt: 0.0214, va: 0.0069, wa: 0.0176, wv: 0.0113, wi: 0.0104, wy: 0.0098};
var desvio = 0.05

var demcolor = '#88f'
var repcolor = '#f88'
var libcolor = '#ff8'
var fedcolor = '#4b4'
// Para a simulação
var demDCvotes = parseInt(pop.dc*gauss(demmean.dc,desvio))
var repDCvotes = parseInt(pop.dc*gauss(repmean.dc,desvio))
var libDCvotes = parseInt(pop.dc*gauss(libmean.dc,desvio))
var DCvotes = demDCvotes+repDCvotes+libDCvotes

var demMEvotes = parseInt(pop.me*gauss(demmean.me,desvio))
var repMEvotes = parseInt(pop.me*gauss(repmean.me,desvio))
var libMEvotes = parseInt(pop.me*gauss(libmean.me,desvio))
var MEvotes = demMEvotes+repMEvotes+libMEvotes

var demRIvotes = parseInt(pop.nh*gauss(demmean.ri,desvio))
var repRIvotes = parseInt(pop.nh*gauss(repmean.ri,desvio))
var libRIvotes = parseInt(pop.nh*gauss(libmean.ri,desvio))
var RIvotes = demRIvotes+repRIvotes+libRIvotes

var demNHvotes = parseInt(pop.nh*gauss(demmean.nh,desvio))
var repNHvotes = parseInt(pop.nh*gauss(repmean.nh,desvio))
var libNHvotes = parseInt(pop.nh*gauss(libmean.nh,desvio))
var NHvotes = demNHvotes+repNHvotes+libNHvotes

var demVTvotes = parseInt(pop.vt*gauss(demmean.vt,desvio))
var repVTvotes = parseInt(pop.vt*gauss(repmean.vt,desvio))
var libVTvotes = parseInt(pop.vt*gauss(libmean.vt,desvio))
var VTvotes = demVTvotes+repVTvotes+libVTvotes

var demMAvotes = parseInt(pop.ma*gauss(demmean.ma,desvio))
var repMAvotes = parseInt(pop.ma*gauss(repmean.ma,desvio))
var libMAvotes = parseInt(pop.ma*gauss(libmean.ma,desvio))
var MAvotes = demMAvotes+repMAvotes+libMAvotes

var demCTvotes = parseInt(pop.ct*gauss(demmean.ct,desvio))
var repCTvotes = parseInt(pop.ct*gauss(repmean.ct,desvio))
var libCTvotes = parseInt(pop.ct*gauss(libmean.ct,desvio))
var CTvotes = demCTvotes+repCTvotes+libCTvotes

var demNJvotes = parseInt(pop.nj*gauss(demmean.nj,desvio))
var repNJvotes = parseInt(pop.nj*gauss(repmean.nj,desvio))
var libNJvotes = parseInt(pop.nj*gauss(libmean.nj,desvio))
var NJvotes = demNJvotes+repNJvotes+libNJvotes

var demDEvotes = parseInt(pop.de*gauss(demmean.de,desvio))
var repDEvotes = parseInt(pop.de*gauss(repmean.de,desvio))
var libDEvotes = parseInt(pop.de*gauss(libmean.de,desvio))
var DEvotes = demDEvotes+repDEvotes+libDEvotes

var demMDvotes = parseInt(pop.md*gauss(demmean.md,desvio))
var repMDvotes = parseInt(pop.md*gauss(repmean.md,desvio))
var libMDvotes = parseInt(pop.md*gauss(libmean.md,desvio))
var MDvotes = demMDvotes+repMDvotes+libMDvotes

var demNYvotes = parseInt(pop.ny*gauss(demmean.ny,desvio))
var repNYvotes = parseInt(pop.ny*gauss(repmean.ny,desvio))
var libNYvotes = parseInt(pop.ny*gauss(libmean.ny,desvio))
var NYvotes = demNYvotes+repNYvotes+libNYvotes

var demPAvotes = parseInt(pop.pa*gauss(demmean.pa,desvio))
var repPAvotes = parseInt(pop.pa*gauss(repmean.pa,desvio))
var libPAvotes = parseInt(pop.pa*gauss(libmean.pa,desvio))
var PAvotes = demPAvotes+repPAvotes+libPAvotes

var demWVvotes = parseInt(pop.wv*gauss(demmean.wv,desvio))
var repWVvotes = parseInt(pop.wv*gauss(repmean.wv,desvio))
var libWVvotes = parseInt(pop.wv*gauss(libmean.wv,desvio))
var WVvotes = demWVvotes+repWVvotes+libWVvotes

var demVAvotes = parseInt(pop.va*gauss(demmean.va,desvio))
var repVAvotes = parseInt(pop.va*gauss(repmean.va,desvio))
var libVAvotes = parseInt(pop.va*gauss(libmean.va,desvio))
var VAvotes = demVAvotes+repVAvotes+libVAvotes

var demSCvotes = parseInt(pop.sc*gauss(demmean.sc,desvio))
var repSCvotes = parseInt(pop.sc*gauss(repmean.sc,desvio))
var libSCvotes = parseInt(pop.sc*gauss(libmean.sc,desvio))
var SCvotes = demSCvotes+repSCvotes+libSCvotes

var demNCvotes = parseInt(pop.nc*gauss(demmean.nc,desvio))
var repNCvotes = parseInt(pop.nc*gauss(repmean.nc,desvio))
var libNCvotes = parseInt(pop.nc*gauss(libmean.nc,desvio))
var NCvotes = demNCvotes+repNCvotes+libNCvotes

var demOHvotes = parseInt(pop.oh*gauss(demmean.oh,desvio))
var repOHvotes = parseInt(pop.oh*gauss(repmean.oh,desvio))
var libOHvotes = parseInt(pop.oh*gauss(libmean.oh,desvio))
var OHvotes = demOHvotes+repOHvotes+libOHvotes

var demGAvotes = parseInt(pop.ga*gauss(demmean.ga,desvio))
var repGAvotes = parseInt(pop.ga*gauss(repmean.ga,desvio))
var libGAvotes = parseInt(pop.ga*gauss(libmean.ga,desvio))
var GAvotes = demGAvotes+repGAvotes+libGAvotes

var demINvotes = parseInt(pop.in*gauss(demmean.in,desvio))
var repINvotes = parseInt(pop.in*gauss(repmean.in,desvio))
var libINvotes = parseInt(pop.in*gauss(libmean.in,desvio))
var INvotes = demINvotes+repINvotes+libINvotes

var demKYvotes = parseInt(pop.ky*gauss(demmean.ky,desvio))
var repKYvotes = parseInt(pop.ky*gauss(repmean.ky,desvio))
var libKYvotes = parseInt(pop.ky*gauss(libmean.ky,desvio))
var KYvotes = demKYvotes+repKYvotes+libKYvotes

var demTNvotes = parseInt(pop.tn*gauss(demmean.tn,desvio))
var repTNvotes = parseInt(pop.tn*gauss(repmean.tn,desvio))
var libTNvotes = parseInt(pop.tn*gauss(libmean.tn,desvio))
var TNvotes = demTNvotes+repTNvotes+libTNvotes

var demMIvotes = parseInt(pop.mi*gauss(demmean.mi,desvio))
var repMIvotes = parseInt(pop.mi*gauss(repmean.mi,desvio))
var libMIvotes = parseInt(pop.mi*gauss(libmean.mi,desvio))
var MIvotes = demMIvotes+repMIvotes+libMIvotes

var demFLvotes = parseInt(pop.fl*gauss(demmean.fl,desvio))
var repFLvotes = parseInt(pop.fl*gauss(repmean.fl,desvio))
var libFLvotes = parseInt(pop.fl*gauss(libmean.fl,desvio))
var FLvotes = demFLvotes+repFLvotes+libFLvotes

var demALvotes = parseInt(pop.al*gauss(demmean.al,desvio))
var repALvotes = parseInt(pop.al*gauss(repmean.al,desvio))
var libALvotes = parseInt(pop.al*gauss(libmean.al,desvio))
var ALvotes = demALvotes+repALvotes+libALvotes

var demMSvotes = parseInt(pop.ms*gauss(demmean.ms,desvio))
var repMSvotes = parseInt(pop.ms*gauss(repmean.ms,desvio))
var libMSvotes = parseInt(pop.ms*gauss(libmean.ms,desvio))
var MSvotes = demMSvotes+repMSvotes+libMSvotes

var demWIvotes = parseInt(pop.wi*gauss(demmean.wi,desvio))
var repWIvotes = parseInt(pop.wi*gauss(repmean.wi,desvio))
var libWIvotes = parseInt(pop.wi*gauss(libmean.wi,desvio))
var WIvotes = demWIvotes+repWIvotes+libWIvotes

var demILvotes = parseInt(pop.il*gauss(demmean.il,desvio))
var repILvotes = parseInt(pop.il*gauss(repmean.il,desvio))
var libILvotes = parseInt(pop.il*gauss(libmean.il,desvio))
var ILvotes = demILvotes+repILvotes+libILvotes

var demMNvotes = parseInt(pop.mn*gauss(demmean.mn,desvio))
var repMNvotes = parseInt(pop.mn*gauss(repmean.mn,desvio))
var libMNvotes = parseInt(pop.mn*gauss(libmean.mn,desvio))
var MNvotes = demMNvotes+repMNvotes+libMNvotes

var demIAvotes = parseInt(pop.ia*gauss(demmean.ia,desvio))
var repIAvotes = parseInt(pop.ia*gauss(repmean.ia,desvio))
var libIAvotes = parseInt(pop.ia*gauss(libmean.ia,desvio))
var IAvotes = demIAvotes+repIAvotes+libIAvotes

var demMOvotes = parseInt(pop.mo*gauss(demmean.mo,desvio))
var repMOvotes = parseInt(pop.mo*gauss(repmean.mo,desvio))
var libMOvotes = parseInt(pop.mo*gauss(libmean.mo,desvio))
var MOvotes = demMOvotes+repMOvotes+libMOvotes

var demARvotes = parseInt(pop.ar*gauss(demmean.ar,desvio))
var repARvotes = parseInt(pop.ar*gauss(repmean.ar,desvio))
var libARvotes = parseInt(pop.ar*gauss(libmean.ar,desvio))
var ARvotes = demARvotes+repARvotes+libARvotes

var demLAvotes = parseInt(pop.la*gauss(demmean.la,desvio))
var repLAvotes = parseInt(pop.la*gauss(repmean.la,desvio))
var libLAvotes = parseInt(pop.la*gauss(libmean.la,desvio))
var LAvotes = demLAvotes+repLAvotes+libLAvotes

var demNDvotes = parseInt(pop.nd*gauss(demmean.nd,desvio))
var repNDvotes = parseInt(pop.nd*gauss(repmean.nd,desvio))
var libNDvotes = parseInt(pop.nd*gauss(libmean.nd,desvio))
var NDvotes = demNDvotes+repNDvotes+libNDvotes

var demSDvotes = parseInt(pop.sd*gauss(demmean.sd,desvio))
var repSDvotes = parseInt(pop.sd*gauss(repmean.sd,desvio))
var libSDvotes = parseInt(pop.sd*gauss(libmean.sd,desvio))
var SDvotes = demSDvotes+repSDvotes+libSDvotes

var demNEvotes = parseInt(pop.ne*gauss(demmean.ne,desvio))
var repNEvotes = parseInt(pop.ne*gauss(repmean.ne,desvio))
var libNEvotes = parseInt(pop.ne*gauss(libmean.ne,desvio))
var NEvotes = demNEvotes+repNEvotes+libNEvotes

var demKSvotes = parseInt(pop.ks*gauss(demmean.ks,desvio))
var repKSvotes = parseInt(pop.ks*gauss(repmean.ks,desvio))
var libKSvotes = parseInt(pop.ks*gauss(libmean.ks,desvio))
var KSvotes = demKSvotes+repKSvotes+libKSvotes

var demOKvotes = parseInt(pop.ok*gauss(demmean.ok,desvio))
var repOKvotes = parseInt(pop.ok*gauss(repmean.ok,desvio))
var libOKvotes = parseInt(pop.ok*gauss(libmean.ok,desvio))
var OKvotes = demOKvotes+repOKvotes+libOKvotes

var demTXvotes = parseInt(pop.tx*gauss(demmean.tx,desvio))
var repTXvotes = parseInt(pop.tx*gauss(repmean.tx,desvio))
var libTXvotes = parseInt(pop.tx*gauss(libmean.tx,desvio))
var TXvotes = demTXvotes+repTXvotes+libTXvotes

var demWYvotes = parseInt(pop.wy*gauss(demmean.wy,desvio))
var repWYvotes = parseInt(pop.wy*gauss(repmean.wy,desvio))
var libWYvotes = parseInt(pop.wy*gauss(libmean.wy,desvio))
var WYvotes = demWYvotes+repWYvotes+libWYvotes

var demCOvotes = parseInt(pop.co*gauss(demmean.co,desvio))
var repCOvotes = parseInt(pop.co*gauss(repmean.co,desvio))
var libCOvotes = parseInt(pop.co*gauss(libmean.co,desvio))
var COvotes = demCOvotes+repCOvotes+libCOvotes

var demNMvotes = parseInt(pop.nm*gauss(demmean.nm,desvio))
var repNMvotes = parseInt(pop.nm*gauss(repmean.nm,desvio))
var libNMvotes = parseInt(pop.nm*gauss(libmean.nm,desvio))
var NMvotes = demNMvotes+repNMvotes+libNMvotes

var demMTvotes = parseInt(pop.mt*gauss(demmean.mt,desvio))
var repMTvotes = parseInt(pop.mt*gauss(repmean.mt,desvio))
var libMTvotes = parseInt(pop.mt*gauss(libmean.mt,desvio))
var MTvotes = demMTvotes+repMTvotes+libMTvotes

var demIDvotes = parseInt(pop.id*gauss(demmean.id,desvio))
var repIDvotes = parseInt(pop.id*gauss(repmean.id,desvio))
var libIDvotes = parseInt(pop.id*gauss(libmean.id,desvio))
var IDvotes = demIDvotes+repIDvotes+libIDvotes

var demUTvotes = parseInt(pop.ut*gauss(demmean.ut,desvio))
var repUTvotes = parseInt(pop.ut*gauss(repmean.ut,desvio))
var libUTvotes = parseInt(pop.ut*gauss(libmean.ut,desvio))
var UTvotes = demUTvotes+repUTvotes+libUTvotes

var demAZvotes = parseInt(pop.az*gauss(demmean.az,desvio))
var repAZvotes = parseInt(pop.az*gauss(repmean.az,desvio))
var libAZvotes = parseInt(pop.az*gauss(libmean.az,desvio))
var AZvotes = demAZvotes+repAZvotes+libAZvotes

var demNVvotes = parseInt(pop.nv*gauss(demmean.nv,desvio))
var repNVvotes = parseInt(pop.nv*gauss(repmean.nv,desvio))
var libNVvotes = parseInt(pop.nv*gauss(libmean.nv,desvio))
var NVvotes = demNVvotes+repNVvotes+libNVvotes

var demWAvotes = parseInt(pop.wa*gauss(demmean.wa,desvio))
var repWAvotes = parseInt(pop.wa*gauss(repmean.wa,desvio))
var libWAvotes = parseInt(pop.wa*gauss(libmean.wa,desvio))
var WAvotes = demWAvotes+repWAvotes+libWAvotes

var demORvotes = parseInt(pop.or*gauss(demmean.or,desvio))
var repORvotes = parseInt(pop.or*gauss(repmean.or,desvio))
var libORvotes = parseInt(pop.or*gauss(libmean.or,desvio))
var ORvotes = demORvotes+repORvotes+libORvotes

var demCAvotes = parseInt(pop.ca*gauss(demmean.ca,desvio))
var repCAvotes = parseInt(pop.ca*gauss(repmean.ca,desvio))
var libCAvotes = parseInt(pop.ca*gauss(libmean.ca,desvio))
var CAvotes = demCAvotes+repCAvotes+libCAvotes

var demAKvotes = parseInt(pop.ak*gauss(demmean.ak,desvio))
var repAKvotes = parseInt(pop.ak*gauss(repmean.ak,desvio))
var libAKvotes = parseInt(pop.ak*gauss(libmean.ak,desvio))
var AKvotes = demAKvotes+repAKvotes+libAKvotes

var demHIvotes = parseInt(pop.hi*gauss(demmean.hi,desvio))
var repHIvotes = parseInt(pop.hi*gauss(repmean.hi,desvio))
var libHIvotes = parseInt(pop.hi*gauss(libmean.hi,desvio))
var HIvotes = demHIvotes+repHIvotes+libHIvotes

var demUSvotes = 0
var repUSvotes = 0
var libUSvotes = 0

var USvotes = 0
var demUSpercent = 0
var repUSpercent = 0
var libUSpercent = 0
// Chamadas
var vetorEstado = window.document.getElementsByClassName('state')
function votar(){
    window.document.getElementById('apurador').style.display = 'none';
    var apuracao = setInterval(function estadovota(){
        switch(estado){
            case 0: // DC
            contest = evDC
            if(demDCvotes<repDCvotes){
                vetorEstado[estado].style.fill = repcolor;
                evR += contest
            }else{
                vetorEstado[estado].style.fill = demcolor;
                evD += contest
            }
            window.document.getElementById('td_demDCvotes').innerText = demDCvotes.toLocaleString('en-us');
            window.document.getElementById('td_repDCvotes').innerText = repDCvotes.toLocaleString('en-us');
            window.document.getElementById('td_libDCvotes').innerText = libDCvotes.toLocaleString('en-us');
            
            window.document.getElementById('td_demDCpercent').innerText = (100*demDCvotes/DCvotes).toFixed(2)+"%";
            window.document.getElementById('td_repDCpercent').innerText = (100*repDCvotes/DCvotes).toFixed(2)+"%";
            window.document.getElementById('td_libDCpercent').innerText = (100*libDCvotes/DCvotes).toFixed(2)+"%";

            demUSvotes += demDCvotes
            repUSvotes += repDCvotes
            libUSvotes += libDCvotes
            break

            case 11: // Maine
            contest = evME
            if(demMEvotes<repMEvotes){
                vetorEstado[estado].style.fill = repcolor;
                evR += contest
            }else{
                vetorEstado[estado].style.fill = demcolor;
                evD += contest
            }
            window.document.getElementById('td_demMEvotes').innerText = demMEvotes.toLocaleString('en-us');
            window.document.getElementById('td_repMEvotes').innerText = repMEvotes.toLocaleString('en-us');
            window.document.getElementById('td_libMEvotes').innerText = libMEvotes.toLocaleString('en-us');
            
            window.document.getElementById('td_demMEpercent').innerText = (100*demMEvotes/MEvotes).toFixed(2)+"%";
            window.document.getElementById('td_repMEpercent').innerText = (100*repMEvotes/MEvotes).toFixed(2)+"%";
            window.document.getElementById('td_libMEpercent').innerText = (100*libMEvotes/MEvotes).toFixed(2)+"%";

            demUSvotes += demMEvotes
            repUSvotes += repMEvotes
            libUSvotes += libMEvotes
            break

            case 4: // Rhode Island
            contest = evRI
            if(demRIvotes<repRIvotes){
                vetorEstado[estado].style.fill = repcolor;
                evR += contest
            }else{
                vetorEstado[estado].style.fill = demcolor;
                evD += contest
            }
            window.document.getElementById('td_demRIvotes').innerText = demRIvotes.toLocaleString('en-us');
            window.document.getElementById('td_repRIvotes').innerText = repRIvotes.toLocaleString('en-us');
            window.document.getElementById('td_libRIvotes').innerText = libRIvotes.toLocaleString('en-us');
            
            window.document.getElementById('td_demRIpercent').innerText = (100*demRIvotes/RIvotes).toFixed(2)+"%";
            window.document.getElementById('td_repRIpercent').innerText = (100*repRIvotes/RIvotes).toFixed(2)+"%";
            window.document.getElementById('td_libRIpercent').innerText = (100*libRIvotes/RIvotes).toFixed(2)+"%";

            demUSvotes += demRIvotes
            repUSvotes += repRIvotes
            libUSvotes += libRIvotes
            break

            case 18: // New Hampshire
            contest = evNH
            if(demNHvotes<repNHvotes){
                vetorEstado[estado].style.fill = repcolor;
                evR += contest
            }else{
                vetorEstado[estado].style.fill = demcolor;
                evD += contest
            }
            window.document.getElementById('td_demNHvotes').innerText = demNHvotes.toLocaleString('en-us');
            window.document.getElementById('td_repNHvotes').innerText = repNHvotes.toLocaleString('en-us');
            window.document.getElementById('td_libNHvotes').innerText = libNHvotes.toLocaleString('en-us');
            
            window.document.getElementById('td_demNHpercent').innerText = (100*demNHvotes/NHvotes).toFixed(2)+"%";
            window.document.getElementById('td_repNHpercent').innerText = (100*repNHvotes/NHvotes).toFixed(2)+"%";
            window.document.getElementById('td_libNHpercent').innerText = (100*libNHvotes/NHvotes).toFixed(2)+"%";

            demUSvotes += demNHvotes
            repUSvotes += repNHvotes
            libUSvotes += libNHvotes
            break

            case 2: // Vermont
            contest = evVT
            if(demVTvotes<repVTvotes){
                vetorEstado[estado].style.fill = repcolor;
                evR += contest
            }else{
                vetorEstado[estado].style.fill = demcolor;
                evD += contest
            }
            window.document.getElementById('td_demVTvotes').innerText = demVTvotes.toLocaleString('en-us');
            window.document.getElementById('td_repVTvotes').innerText = repVTvotes.toLocaleString('en-us');
            window.document.getElementById('td_libVTvotes').innerText = libVTvotes.toLocaleString('en-us');
            
            window.document.getElementById('td_demVTpercent').innerText = (100*demVTvotes/VTvotes).toFixed(2)+"%";
            window.document.getElementById('td_repVTpercent').innerText = (100*repVTvotes/VTvotes).toFixed(2)+"%";
            window.document.getElementById('td_libVTpercent').innerText = (100*libVTvotes/VTvotes).toFixed(2)+"%";

            demUSvotes += demVTvotes
            repUSvotes += repVTvotes
            libUSvotes += libVTvotes
            break

            case 1: // Massachusetts
            contest = evMA
            if(demMAvotes<repMAvotes){
                vetorEstado[estado].style.fill = repcolor;
                evR += contest
            }else{
                vetorEstado[estado].style.fill = demcolor;
                evD += contest
            }
            window.document.getElementById('td_demMAvotes').innerText = demMAvotes.toLocaleString('en-us');
            window.document.getElementById('td_repMAvotes').innerText = repMAvotes.toLocaleString('en-us');
            window.document.getElementById('td_libMAvotes').innerText = libMAvotes.toLocaleString('en-us');
            
            window.document.getElementById('td_demMApercent').innerText = (100*demMAvotes/MAvotes).toFixed(2)+"%";
            window.document.getElementById('td_repMApercent').innerText = (100*repMAvotes/MAvotes).toFixed(2)+"%";
            window.document.getElementById('td_libMApercent').innerText = (100*libMAvotes/MAvotes).toFixed(2)+"%";

            demUSvotes += demMAvotes
            repUSvotes += repMAvotes
            libUSvotes += libMAvotes
            break

            case 7: // Connecticut
            contest = evCT
            if(demCTvotes<repCTvotes){
                vetorEstado[estado].style.fill = repcolor;
                evR += contest
            }else{
                vetorEstado[estado].style.fill = demcolor;
                evD += contest
            }
            window.document.getElementById('td_demCTvotes').innerText = demCTvotes.toLocaleString('en-us');
            window.document.getElementById('td_repCTvotes').innerText = repCTvotes.toLocaleString('en-us');
            window.document.getElementById('td_libCTvotes').innerText = libCTvotes.toLocaleString('en-us');
            
            window.document.getElementById('td_demCTpercent').innerText = (100*demCTvotes/CTvotes).toFixed(2)+"%";
            window.document.getElementById('td_repCTpercent').innerText = (100*repCTvotes/CTvotes).toFixed(2)+"%";
            window.document.getElementById('td_libCTpercent').innerText = (100*libCTvotes/CTvotes).toFixed(2)+"%";

            demUSvotes += demCTvotes
            repUSvotes += repCTvotes
            libUSvotes += libCTvotes
            break

            case 8: // New Jersey
            contest = evNJ
            if(demNJvotes<repNJvotes){
                vetorEstado[estado].style.fill = repcolor;
                evR += contest
            }else{
                vetorEstado[estado].style.fill = demcolor;
                evD += contest
            }
            window.document.getElementById('td_demNJvotes').innerText = demNJvotes.toLocaleString('en-us');
            window.document.getElementById('td_repNJvotes').innerText = repNJvotes.toLocaleString('en-us');
            window.document.getElementById('td_libNJvotes').innerText = libNJvotes.toLocaleString('en-us');
            
            window.document.getElementById('td_demNJpercent').innerText = (100*demNJvotes/NJvotes).toFixed(2)+"%";
            window.document.getElementById('td_repNJpercent').innerText = (100*repNJvotes/NJvotes).toFixed(2)+"%";
            window.document.getElementById('td_libNJpercent').innerText = (100*libNJvotes/NJvotes).toFixed(2)+"%";

            demUSvotes += demNJvotes
            repUSvotes += repNJvotes
            libUSvotes += libNJvotes
            break

            case 13: // Delaware
            contest = evDE
            if(demDEvotes<repDEvotes){
                vetorEstado[estado].style.fill = repcolor;
                evR += contest
            }else{
                vetorEstado[estado].style.fill = demcolor;
                evD += contest
            }
            window.document.getElementById('td_demDEvotes').innerText = demDEvotes.toLocaleString('en-us');
            window.document.getElementById('td_repDEvotes').innerText = repDEvotes.toLocaleString('en-us');
            window.document.getElementById('td_libDEvotes').innerText = libDEvotes.toLocaleString('en-us');
            
            window.document.getElementById('td_demDEpercent').innerText = (100*demDEvotes/DEvotes).toFixed(2)+"%";
            window.document.getElementById('td_repDEpercent').innerText = (100*repDEvotes/DEvotes).toFixed(2)+"%";
            window.document.getElementById('td_libDEpercent').innerText = (100*libDEvotes/DEvotes).toFixed(2)+"%";

            demUSvotes += demDEvotes
            repUSvotes += repDEvotes
            libUSvotes += libDEvotes
            break

            case 3: // Maryland
            contest = evMD
            if(demMDvotes<repMDvotes){
                vetorEstado[estado].style.fill = repcolor;
                evR += contest
            }else{
                vetorEstado[estado].style.fill = demcolor;
                evD += contest
            }
            window.document.getElementById('td_demMDvotes').innerText = demMDvotes.toLocaleString('en-us');
            window.document.getElementById('td_repMDvotes').innerText = repMDvotes.toLocaleString('en-us');
            window.document.getElementById('td_libMDvotes').innerText = libMDvotes.toLocaleString('en-us');
            
            window.document.getElementById('td_demMDpercent').innerText = (100*demMDvotes/MDvotes).toFixed(2)+"%";
            window.document.getElementById('td_repMDpercent').innerText = (100*repMDvotes/MDvotes).toFixed(2)+"%";
            window.document.getElementById('td_libMDpercent').innerText = (100*libMDvotes/MDvotes).toFixed(2)+"%";

            demUSvotes += demMDvotes
            repUSvotes += repMDvotes
            libUSvotes += libMDvotes
            break

            case 6: // New York
            contest = evNY
            if(demNYvotes<repNYvotes){
                vetorEstado[estado].style.fill = repcolor;
                evR += contest
            }else{
                vetorEstado[estado].style.fill = demcolor;
                evD += contest
            }
            window.document.getElementById('td_demNYvotes').innerText = demNYvotes.toLocaleString('en-us');
            window.document.getElementById('td_repNYvotes').innerText = repNYvotes.toLocaleString('en-us');
            window.document.getElementById('td_libNYvotes').innerText = libNYvotes.toLocaleString('en-us');
            
            window.document.getElementById('td_demNYpercent').innerText = (100*demNYvotes/NYvotes).toFixed(2)+"%";
            window.document.getElementById('td_repNYpercent').innerText = (100*repNYvotes/NYvotes).toFixed(2)+"%";
            window.document.getElementById('td_libNYpercent').innerText = (100*libNYvotes/NYvotes).toFixed(2)+"%";

            demUSvotes += demNYvotes
            repUSvotes += repNYvotes
            libUSvotes += libNYvotes
            break

            case 26: // Pennsylvania
            contest = evPA
            if(demPAvotes<repPAvotes){
                vetorEstado[estado].style.fill = repcolor;
                evR += contest
            }else{
                vetorEstado[estado].style.fill = demcolor;
                evD += contest
            }
            window.document.getElementById('td_demPAvotes').innerText = demPAvotes.toLocaleString('en-us');
            window.document.getElementById('td_repPAvotes').innerText = repPAvotes.toLocaleString('en-us');
            window.document.getElementById('td_libPAvotes').innerText = libPAvotes.toLocaleString('en-us');
            
            window.document.getElementById('td_demPApercent').innerText = (100*demPAvotes/PAvotes).toFixed(2)+"%";
            window.document.getElementById('td_repPApercent').innerText = (100*repPAvotes/PAvotes).toFixed(2)+"%";
            window.document.getElementById('td_libPApercent').innerText = (100*libPAvotes/PAvotes).toFixed(2)+"%";

            demUSvotes += demPAvotes
            repUSvotes += repPAvotes
            libUSvotes += libPAvotes
            break

            case 12: // West Virginia
            contest = evWV
            if(demWVvotes<repWVvotes){
                vetorEstado[estado].style.fill = repcolor;
                evR += contest
            }else{
                vetorEstado[estado].style.fill = demcolor;
                evD += contest
            }
            window.document.getElementById('td_demWVvotes').innerText = demWVvotes.toLocaleString('en-us');
            window.document.getElementById('td_repWVvotes').innerText = repWVvotes.toLocaleString('en-us');
            window.document.getElementById('td_libWVvotes').innerText = libWVvotes.toLocaleString('en-us');
            
            window.document.getElementById('td_demWVpercent').innerText = (100*demWVvotes/WVvotes).toFixed(2)+"%";
            window.document.getElementById('td_repWVpercent').innerText = (100*repWVvotes/WVvotes).toFixed(2)+"%";
            window.document.getElementById('td_libWVpercent').innerText = (100*libWVvotes/WVvotes).toFixed(2)+"%";

            demUSvotes += demWVvotes
            repUSvotes += repWVvotes
            libUSvotes += libWVvotes
            break

            case 19: // Virginia
            contest = evVA
            if(demVAvotes<repVAvotes){
                vetorEstado[estado].style.fill = repcolor;
                evR += contest
            }else{
                vetorEstado[estado].style.fill = demcolor;
                evD += contest
            }
            window.document.getElementById('td_demVAvotes').innerText = demVAvotes.toLocaleString('en-us');
            window.document.getElementById('td_repVAvotes').innerText = repVAvotes.toLocaleString('en-us');
            window.document.getElementById('td_libVAvotes').innerText = libVAvotes.toLocaleString('en-us');
            
            window.document.getElementById('td_demVApercent').innerText = (100*demVAvotes/VAvotes).toFixed(2)+"%";
            window.document.getElementById('td_repVApercent').innerText = (100*repVAvotes/VAvotes).toFixed(2)+"%";
            window.document.getElementById('td_libVApercent').innerText = (100*libVAvotes/VAvotes).toFixed(2)+"%";

            demUSvotes += demVAvotes
            repUSvotes += repVAvotes
            libUSvotes += libVAvotes
            break

            case 15: // South Carolina
            contest = evSC
            if(demSCvotes<repSCvotes){
                vetorEstado[estado].style.fill = repcolor;
                evR += contest
            }else{
                vetorEstado[estado].style.fill = demcolor;
                evD += contest
            }
            window.document.getElementById('td_demSCvotes').innerText = demSCvotes.toLocaleString('en-us');
            window.document.getElementById('td_repSCvotes').innerText = repSCvotes.toLocaleString('en-us');
            window.document.getElementById('td_libSCvotes').innerText = libSCvotes.toLocaleString('en-us');
            
            window.document.getElementById('td_demSCpercent').innerText = (100*demSCvotes/SCvotes).toFixed(2)+"%";
            window.document.getElementById('td_repSCpercent').innerText = (100*repSCvotes/SCvotes).toFixed(2)+"%";
            window.document.getElementById('td_libSCpercent').innerText = (100*libSCvotes/SCvotes).toFixed(2)+"%";

            demUSvotes += demSCvotes
            repUSvotes += repSCvotes
            libUSvotes += libSCvotes
            break

            case 23: // North Carolina
            contest = evNC
            if(demNCvotes<repNCvotes){
                vetorEstado[estado].style.fill = repcolor;
                evR += contest
            }else{
                vetorEstado[estado].style.fill = demcolor;
                evD += contest
            }
            window.document.getElementById('td_demNCvotes').innerText = demNCvotes.toLocaleString('en-us');
            window.document.getElementById('td_repNCvotes').innerText = repNCvotes.toLocaleString('en-us');
            window.document.getElementById('td_libNCvotes').innerText = libNCvotes.toLocaleString('en-us');
            
            window.document.getElementById('td_demNCpercent').innerText = (100*demNCvotes/NCvotes).toFixed(2)+"%";
            window.document.getElementById('td_repNCpercent').innerText = (100*repNCvotes/NCvotes).toFixed(2)+"%";
            window.document.getElementById('td_libNCpercent').innerText = (100*libNCvotes/NCvotes).toFixed(2)+"%";

            demUSvotes += demNCvotes
            repUSvotes += repNCvotes
            libUSvotes += libNCvotes
            break

            case 25: // Ohio
            contest = evOH
            if(demOHvotes<repOHvotes){
                vetorEstado[estado].style.fill = repcolor;
                evR += contest
            }else{
                vetorEstado[estado].style.fill = demcolor;
                evD += contest
            }
            window.document.getElementById('td_demOHvotes').innerText = demOHvotes.toLocaleString('en-us');
            window.document.getElementById('td_repOHvotes').innerText = repOHvotes.toLocaleString('en-us');
            window.document.getElementById('td_libOHvotes').innerText = libOHvotes.toLocaleString('en-us');
            
            window.document.getElementById('td_demOHpercent').innerText = (100*demOHvotes/OHvotes).toFixed(2)+"%";
            window.document.getElementById('td_repOHpercent').innerText = (100*repOHvotes/OHvotes).toFixed(2)+"%";
            window.document.getElementById('td_libOHpercent').innerText = (100*libOHvotes/OHvotes).toFixed(2)+"%";

            demUSvotes += demOHvotes
            repUSvotes += repOHvotes
            libUSvotes += libOHvotes
            break

            case 30: // Georgia
            contest = evGA
            if(demGAvotes<repGAvotes){
                vetorEstado[estado].style.fill = repcolor;
                evR += contest
            }else{
                vetorEstado[estado].style.fill = demcolor;
                evD += contest
            }
            window.document.getElementById('td_demGAvotes').innerText = demGAvotes.toLocaleString('en-us');
            window.document.getElementById('td_repGAvotes').innerText = repGAvotes.toLocaleString('en-us');
            window.document.getElementById('td_libGAvotes').innerText = libGAvotes.toLocaleString('en-us');
            
            window.document.getElementById('td_demGApercent').innerText = (100*demGAvotes/GAvotes).toFixed(2)+"%";
            window.document.getElementById('td_repGApercent').innerText = (100*repGAvotes/GAvotes).toFixed(2)+"%";
            window.document.getElementById('td_libGApercent').innerText = (100*libGAvotes/GAvotes).toFixed(2)+"%";

            demUSvotes += demGAvotes
            repUSvotes += repGAvotes
            libUSvotes += libGAvotes
            break

            case 20: // Indiana
            contest = evIN
            if(demINvotes<repINvotes){
                vetorEstado[estado].style.fill = repcolor;
                evR += contest
            }else{
                vetorEstado[estado].style.fill = demcolor;
                evD += contest
            }
            window.document.getElementById('td_demINvotes').innerText = demINvotes.toLocaleString('en-us');
            window.document.getElementById('td_repINvotes').innerText = repINvotes.toLocaleString('en-us');
            window.document.getElementById('td_libINvotes').innerText = libINvotes.toLocaleString('en-us');
            
            window.document.getElementById('td_demINpercent').innerText = (100*demINvotes/INvotes).toFixed(2)+"%";
            window.document.getElementById('td_repINpercent').innerText = (100*repINvotes/INvotes).toFixed(2)+"%";
            window.document.getElementById('td_libINpercent').innerText = (100*libINvotes/INvotes).toFixed(2)+"%";

            demUSvotes += demINvotes
            repUSvotes += repINvotes
            libUSvotes += libINvotes
            break

            case 9: // Kentucky
            contest = evKY
            if(demKYvotes<repKYvotes){
                vetorEstado[estado].style.fill = repcolor;
                evR += contest
            }else{
                vetorEstado[estado].style.fill = demcolor;
                evD += contest
            }
            window.document.getElementById('td_demKYvotes').innerText = demKYvotes.toLocaleString('en-us');
            window.document.getElementById('td_repKYvotes').innerText = repKYvotes.toLocaleString('en-us');
            window.document.getElementById('td_libKYvotes').innerText = libKYvotes.toLocaleString('en-us');
            
            window.document.getElementById('td_demKYpercent').innerText = (100*demKYvotes/KYvotes).toFixed(2)+"%";
            window.document.getElementById('td_repKYpercent').innerText = (100*repKYvotes/KYvotes).toFixed(2)+"%";
            window.document.getElementById('td_libKYpercent').innerText = (100*libKYvotes/KYvotes).toFixed(2)+"%";

            demUSvotes += demKYvotes
            repUSvotes += repKYvotes
            libUSvotes += libKYvotes
            break

            case 5: // Tennessee
            contest = evTN
            if(demTNvotes<repTNvotes){
                vetorEstado[estado].style.fill = repcolor;
                evR += contest
            }else{
                vetorEstado[estado].style.fill = demcolor;
                evD += contest
            }
            window.document.getElementById('td_demTNvotes').innerText = demTNvotes.toLocaleString('en-us');
            window.document.getElementById('td_repTNvotes').innerText = repTNvotes.toLocaleString('en-us');
            window.document.getElementById('td_libTNvotes').innerText = libTNvotes.toLocaleString('en-us');
            
            window.document.getElementById('td_demTNpercent').innerText = (100*demTNvotes/TNvotes).toFixed(2)+"%";
            window.document.getElementById('td_repTNpercent').innerText = (100*repTNvotes/TNvotes).toFixed(2)+"%";
            window.document.getElementById('td_libTNpercent').innerText = (100*libTNvotes/TNvotes).toFixed(2)+"%";

            demUSvotes += demTNvotes
            repUSvotes += repTNvotes
            libUSvotes += libTNvotes
            break

            case 36: // Michigan
            contest = evMI
            if(demMIvotes<repMIvotes){
                vetorEstado[estado].style.fill = repcolor;
                evR += contest
            }else{
                vetorEstado[estado].style.fill = demcolor;
                evD += contest
            }
            window.document.getElementById('td_demMIvotes').innerText = demMIvotes.toLocaleString('en-us');
            window.document.getElementById('td_repMIvotes').innerText = repMIvotes.toLocaleString('en-us');
            window.document.getElementById('td_libMIvotes').innerText = libMIvotes.toLocaleString('en-us');
            
            window.document.getElementById('td_demMIpercent').innerText = (100*demMIvotes/MIvotes).toFixed(2)+"%";
            window.document.getElementById('td_repMIpercent').innerText = (100*repMIvotes/MIvotes).toFixed(2)+"%";
            window.document.getElementById('td_libMIpercent').innerText = (100*libMIvotes/MIvotes).toFixed(2)+"%";

            demUSvotes += demMIvotes
            repUSvotes += repMIvotes
            libUSvotes += libMIvotes
            break

            case 34: // Florida
            contest = evFL
            if(demFLvotes<repFLvotes){
                vetorEstado[estado].style.fill = repcolor;
                evR += contest
            }else{
                vetorEstado[estado].style.fill = demcolor;
                evD += contest
            }
            window.document.getElementById('td_demFLvotes').innerText = demFLvotes.toLocaleString('en-us');
            window.document.getElementById('td_repFLvotes').innerText = repFLvotes.toLocaleString('en-us');
            window.document.getElementById('td_libFLvotes').innerText = libFLvotes.toLocaleString('en-us');
            
            window.document.getElementById('td_demFLpercent').innerText = (100*demFLvotes/FLvotes).toFixed(2)+"%";
            window.document.getElementById('td_repFLpercent').innerText = (100*repFLvotes/FLvotes).toFixed(2)+"%";
            window.document.getElementById('td_libFLpercent').innerText = (100*libFLvotes/FLvotes).toFixed(2)+"%";

            demUSvotes += demFLvotes
            repUSvotes += repFLvotes
            libUSvotes += libFLvotes
            break

            case 10: // Alabama
            contest = evAL
            if(demALvotes<repALvotes){
                vetorEstado[estado].style.fill = repcolor;
                evR += contest
            }else{
                vetorEstado[estado].style.fill = demcolor;
                evD += contest
            }
            window.document.getElementById('td_demALvotes').innerText = demALvotes.toLocaleString('en-us');
            window.document.getElementById('td_repALvotes').innerText = repALvotes.toLocaleString('en-us');
            window.document.getElementById('td_libALvotes').innerText = libALvotes.toLocaleString('en-us');
            
            window.document.getElementById('td_demALpercent').innerText = (100*demALvotes/ALvotes).toFixed(2)+"%";
            window.document.getElementById('td_repALpercent').innerText = (100*repALvotes/ALvotes).toFixed(2)+"%";
            window.document.getElementById('td_libALpercent').innerText = (100*libALvotes/ALvotes).toFixed(2)+"%";

            demUSvotes += demALvotes
            repUSvotes += repALvotes
            libUSvotes += libALvotes
            break

            case 22: // Mississippi
            contest = evMS
            if(demMSvotes<repMSvotes){
                vetorEstado[estado].style.fill = repcolor;
                evR += contest
            }else{
                vetorEstado[estado].style.fill = demcolor;
                evD += contest
            }
            window.document.getElementById('td_demMSvotes').innerText = demMSvotes.toLocaleString('en-us');
            window.document.getElementById('td_repMSvotes').innerText = repMSvotes.toLocaleString('en-us');
            window.document.getElementById('td_libMSvotes').innerText = libMSvotes.toLocaleString('en-us');
            
            window.document.getElementById('td_demMSpercent').innerText = (100*demMSvotes/MSvotes).toFixed(2)+"%";
            window.document.getElementById('td_repMSpercent').innerText = (100*repMSvotes/MSvotes).toFixed(2)+"%";
            window.document.getElementById('td_libMSpercent').innerText = (100*libMSvotes/MSvotes).toFixed(2)+"%";

            demUSvotes += demMSvotes
            repUSvotes += repMSvotes
            libUSvotes += libMSvotes
            break

            case 38: // Winconsin
            contest = evWI
            if(demWIvotes<repWIvotes){
                vetorEstado[estado].style.fill = repcolor;
                evR += contest
            }else{
                vetorEstado[estado].style.fill = demcolor;
                evD += contest
            }
            window.document.getElementById('td_demWIvotes').innerText = demWIvotes.toLocaleString('en-us');
            window.document.getElementById('td_repWIvotes').innerText = repWIvotes.toLocaleString('en-us');
            window.document.getElementById('td_libWIvotes').innerText = libWIvotes.toLocaleString('en-us');
            
            window.document.getElementById('td_demWIpercent').innerText = (100*demWIvotes/WIvotes).toFixed(2)+"%";
            window.document.getElementById('td_repWIpercent').innerText = (100*repWIvotes/WIvotes).toFixed(2)+"%";
            window.document.getElementById('td_libWIpercent').innerText = (100*libWIvotes/WIvotes).toFixed(2)+"%";

            demUSvotes += demWIvotes
            repUSvotes += repWIvotes
            libUSvotes += libWIvotes
            break

            case 27: // Illinois
            contest = evIL
            if(demILvotes<repILvotes){
                vetorEstado[estado].style.fill = repcolor;
                evR += contest
            }else{
                vetorEstado[estado].style.fill = demcolor;
                evD += contest
            }
            window.document.getElementById('td_demILvotes').innerText = demILvotes.toLocaleString('en-us');
            window.document.getElementById('td_repILvotes').innerText = repILvotes.toLocaleString('en-us');
            window.document.getElementById('td_libILvotes').innerText = libILvotes.toLocaleString('en-us');
            
            window.document.getElementById('td_demILpercent').innerText = (100*demILvotes/ILvotes).toFixed(2)+"%";
            window.document.getElementById('td_repILpercent').innerText = (100*repILvotes/ILvotes).toFixed(2)+"%";
            window.document.getElementById('td_libILpercent').innerText = (100*libILvotes/ILvotes).toFixed(2)+"%";

            demUSvotes += demILvotes
            repUSvotes += repILvotes
            libUSvotes += libILvotes
            break

            case 39: // Minnesotta
            contest = evMN
            if(demMNvotes<repMNvotes){
                vetorEstado[estado].style.fill = repcolor;
                evR += contest
            }else{
                vetorEstado[estado].style.fill = demcolor;
                evD += contest
            }
            window.document.getElementById('td_demMNvotes').innerText = demMNvotes.toLocaleString('en-us');
            window.document.getElementById('td_repMNvotes').innerText = repMNvotes.toLocaleString('en-us');
            window.document.getElementById('td_libMNvotes').innerText = libMNvotes.toLocaleString('en-us');
            
            window.document.getElementById('td_demMNpercent').innerText = (100*demMNvotes/MNvotes).toFixed(2)+"%";
            window.document.getElementById('td_repMNpercent').innerText = (100*repMNvotes/MNvotes).toFixed(2)+"%";
            window.document.getElementById('td_libMNpercent').innerText = (100*libMNvotes/MNvotes).toFixed(2)+"%";

            demUSvotes += demMNvotes
            repUSvotes += repMNvotes
            libUSvotes += libMNvotes
            break

            case 32: // Iowa
            contest = evIA
            if(demIAvotes<repIAvotes){
                vetorEstado[estado].style.fill = repcolor;
                evR += contest
            }else{
                vetorEstado[estado].style.fill = demcolor;
                evD += contest
            }
            window.document.getElementById('td_demIAvotes').innerText = demIAvotes.toLocaleString('en-us');
            window.document.getElementById('td_repIAvotes').innerText = repIAvotes.toLocaleString('en-us');
            window.document.getElementById('td_libIAvotes').innerText = libIAvotes.toLocaleString('en-us');
            
            window.document.getElementById('td_demIApercent').innerText = (100*demIAvotes/IAvotes).toFixed(2)+"%";
            window.document.getElementById('td_repIApercent').innerText = (100*repIAvotes/IAvotes).toFixed(2)+"%";
            window.document.getElementById('td_libIApercent').innerText = (100*libIAvotes/IAvotes).toFixed(2)+"%";

            demUSvotes += demIAvotes
            repUSvotes += repIAvotes
            libUSvotes += libIAvotes
            break

            case 24: // Missouri
            contest = evMO
            if(demMOvotes<repMOvotes){
                vetorEstado[estado].style.fill = repcolor;
                evR += contest
            }else{
                vetorEstado[estado].style.fill = demcolor;
                evD += contest
            }
            window.document.getElementById('td_demMOvotes').innerText = demMOvotes.toLocaleString('en-us');
            window.document.getElementById('td_repMOvotes').innerText = repMOvotes.toLocaleString('en-us');
            window.document.getElementById('td_libMOvotes').innerText = libMOvotes.toLocaleString('en-us');
            
            window.document.getElementById('td_demMOpercent').innerText = (100*demMOvotes/MOvotes).toFixed(2)+"%";
            window.document.getElementById('td_repMOpercent').innerText = (100*repMOvotes/MOvotes).toFixed(2)+"%";
            window.document.getElementById('td_libMOpercent').innerText = (100*libMOvotes/MOvotes).toFixed(2)+"%";

            demUSvotes += demMOvotes
            repUSvotes += repMOvotes
            libUSvotes += libMOvotes
            break

            case 14: // Arkansas
            contest = evAR
            if(demARvotes<repARvotes){
                vetorEstado[estado].style.fill = repcolor;
                evR += contest
            }else{
                vetorEstado[estado].style.fill = demcolor;
                evD += contest
            }
            window.document.getElementById('td_demARvotes').innerText = demARvotes.toLocaleString('en-us');
            window.document.getElementById('td_repARvotes').innerText = repARvotes.toLocaleString('en-us');
            window.document.getElementById('td_libARvotes').innerText = libARvotes.toLocaleString('en-us');
            
            window.document.getElementById('td_demARpercent').innerText = (100*demARvotes/ARvotes).toFixed(2)+"%";
            window.document.getElementById('td_repARpercent').innerText = (100*repARvotes/ARvotes).toFixed(2)+"%";
            window.document.getElementById('td_libARpercent').innerText = (100*libARvotes/ARvotes).toFixed(2)+"%";

            demUSvotes += demARvotes
            repUSvotes += repARvotes
            libUSvotes += libARvotes
            break

            case 28: // Louisiana
            contest = evLA
            if(demLAvotes<repLAvotes){
                vetorEstado[estado].style.fill = repcolor;
                evR += contest
            }else{
                vetorEstado[estado].style.fill = demcolor;
                evD += contest
            }
            window.document.getElementById('td_demLAvotes').innerText = demLAvotes.toLocaleString('en-us');
            window.document.getElementById('td_repLAvotes').innerText = repLAvotes.toLocaleString('en-us');
            window.document.getElementById('td_libLAvotes').innerText = libLAvotes.toLocaleString('en-us');
            
            window.document.getElementById('td_demLApercent').innerText = (100*demLAvotes/LAvotes).toFixed(2)+"%";
            window.document.getElementById('td_repLApercent').innerText = (100*repLAvotes/LAvotes).toFixed(2)+"%";
            window.document.getElementById('td_libLApercent').innerText = (100*libLAvotes/LAvotes).toFixed(2)+"%";

            demUSvotes += demLAvotes
            repUSvotes += repLAvotes
            libUSvotes += libLAvotes
            break

            case 21: // North Dakota
            contest = evND
            if(demNDvotes<repNDvotes){
                vetorEstado[estado].style.fill = repcolor;
                evR += contest
            }else{
                vetorEstado[estado].style.fill = demcolor;
                evD += contest
            }
            window.document.getElementById('td_demNDvotes').innerText = demNDvotes.toLocaleString('en-us');
            window.document.getElementById('td_repNDvotes').innerText = repNDvotes.toLocaleString('en-us');
            window.document.getElementById('td_libNDvotes').innerText = libNDvotes.toLocaleString('en-us');
            
            window.document.getElementById('td_demNDpercent').innerText = (100*demNDvotes/NDvotes).toFixed(2)+"%";
            window.document.getElementById('td_repNDpercent').innerText = (100*repNDvotes/NDvotes).toFixed(2)+"%";
            window.document.getElementById('td_libNDpercent').innerText = (100*libNDvotes/NDvotes).toFixed(2)+"%";

            demUSvotes += demNDvotes
            repUSvotes += repNDvotes
            libUSvotes += libNDvotes
            break

            case 29: // South Dakota
            contest = evSD
            if(demSDvotes<repSDvotes){
                vetorEstado[estado].style.fill = repcolor;
                evR += contest
            }else{
                vetorEstado[estado].style.fill = demcolor;
                evD += contest
            }
            window.document.getElementById('td_demSDvotes').innerText = demSDvotes.toLocaleString('en-us');
            window.document.getElementById('td_repSDvotes').innerText = repSDvotes.toLocaleString('en-us');
            window.document.getElementById('td_libSDvotes').innerText = libSDvotes.toLocaleString('en-us');
            
            window.document.getElementById('td_demSDpercent').innerText = (100*demSDvotes/SDvotes).toFixed(2)+"%";
            window.document.getElementById('td_repSDpercent').innerText = (100*repSDvotes/SDvotes).toFixed(2)+"%";
            window.document.getElementById('td_libSDpercent').innerText = (100*libSDvotes/SDvotes).toFixed(2)+"%";

            demUSvotes += demSDvotes
            repUSvotes += repSDvotes
            libUSvotes += libSDvotes
            break

            case 31: // Nebraska
            contest = evNE
            if(demNEvotes<repNEvotes){
                vetorEstado[estado].style.fill = repcolor;
                evR += contest
            }else{
                vetorEstado[estado].style.fill = demcolor;
                evD += contest
            }
            window.document.getElementById('td_demNEvotes').innerText = demNEvotes.toLocaleString('en-us');
            window.document.getElementById('td_repNEvotes').innerText = repNEvotes.toLocaleString('en-us');
            window.document.getElementById('td_libNEvotes').innerText = libNEvotes.toLocaleString('en-us');
            
            window.document.getElementById('td_demNEpercent').innerText = (100*demNEvotes/NEvotes).toFixed(2)+"%";
            window.document.getElementById('td_repNEpercent').innerText = (100*repNEvotes/NEvotes).toFixed(2)+"%";
            window.document.getElementById('td_libNEpercent').innerText = (100*libNEvotes/NEvotes).toFixed(2)+"%";

            demUSvotes += demNEvotes
            repUSvotes += repNEvotes
            libUSvotes += libNEvotes
            break

            case 33: // Kansas
            contest = evKS
            if(demKSvotes<repKSvotes){
                vetorEstado[estado].style.fill = repcolor;
                evR += contest
            }else{
                vetorEstado[estado].style.fill = demcolor;
                evD += contest
            }
            window.document.getElementById('td_demKSvotes').innerText = demKSvotes.toLocaleString('en-us');
            window.document.getElementById('td_repKSvotes').innerText = repKSvotes.toLocaleString('en-us');
            window.document.getElementById('td_libKSvotes').innerText = libKSvotes.toLocaleString('en-us');
            
            window.document.getElementById('td_demKSpercent').innerText = (100*demKSvotes/KSvotes).toFixed(2)+"%";
            window.document.getElementById('td_repKSpercent').innerText = (100*repKSvotes/KSvotes).toFixed(2)+"%";
            window.document.getElementById('td_libKSpercent').innerText = (100*libKSvotes/KSvotes).toFixed(2)+"%";

            demUSvotes += demKSvotes
            repUSvotes += repKSvotes
            libUSvotes += libKSvotes
            break

            case 17: // Oklahoma
            contest = evOK
            if(demOKvotes<repOKvotes){
                vetorEstado[estado].style.fill = repcolor;
                evR += contest
            }else{
                vetorEstado[estado].style.fill = demcolor;
                evD += contest
            }
            window.document.getElementById('td_demOKvotes').innerText = demOKvotes.toLocaleString('en-us');
            window.document.getElementById('td_repOKvotes').innerText = repOKvotes.toLocaleString('en-us');
            window.document.getElementById('td_libOKvotes').innerText = libOKvotes.toLocaleString('en-us');
            
            window.document.getElementById('td_demOKpercent').innerText = (100*demOKvotes/OKvotes).toFixed(2)+"%";
            window.document.getElementById('td_repOKpercent').innerText = (100*repOKvotes/OKvotes).toFixed(2)+"%";
            window.document.getElementById('td_libOKpercent').innerText = (100*libOKvotes/OKvotes).toFixed(2)+"%";

            demUSvotes += demOKvotes
            repUSvotes += repOKvotes
            libUSvotes += libOKvotes
            break

            case 44: // Texas
            contest = evTX
            if(demTXvotes<repTXvotes){
                vetorEstado[estado].style.fill = repcolor;
                evR += contest
            }else{
                vetorEstado[estado].style.fill = demcolor;
                evD += contest
            }
            window.document.getElementById('td_demTXvotes').innerText = demTXvotes.toLocaleString('en-us');
            window.document.getElementById('td_repTXvotes').innerText = repTXvotes.toLocaleString('en-us');
            window.document.getElementById('td_libTXvotes').innerText = libTXvotes.toLocaleString('en-us');
            
            window.document.getElementById('td_demTXpercent').innerText = (100*demTXvotes/TXvotes).toFixed(2)+"%";
            window.document.getElementById('td_repTXpercent').innerText = (100*repTXvotes/TXvotes).toFixed(2)+"%";
            window.document.getElementById('td_libTXpercent').innerText = (100*libTXvotes/TXvotes).toFixed(2)+"%";

            demUSvotes += demTXvotes
            repUSvotes += repTXvotes
            libUSvotes += libTXvotes
            break

            case 16: // Wyoming
            contest = evWY
            if(demWYvotes<repWYvotes){
                vetorEstado[estado].style.fill = repcolor;
                evR += contest
            }else{
                vetorEstado[estado].style.fill = demcolor;
                evD += contest
            }
            window.document.getElementById('td_demWYvotes').innerText = demWYvotes.toLocaleString('en-us');
            window.document.getElementById('td_repWYvotes').innerText = repWYvotes.toLocaleString('en-us');
            window.document.getElementById('td_libWYvotes').innerText = libWYvotes.toLocaleString('en-us');
            
            window.document.getElementById('td_demWYpercent').innerText = (100*demWYvotes/WYvotes).toFixed(2)+"%";
            window.document.getElementById('td_repWYpercent').innerText = (100*repWYvotes/WYvotes).toFixed(2)+"%";
            window.document.getElementById('td_libWYpercent').innerText = (100*libWYvotes/WYvotes).toFixed(2)+"%";

            demUSvotes += demWYvotes
            repUSvotes += repWYvotes
            libUSvotes += libWYvotes
            break

            case 45: // Colorado
            contest = evCO
            if(demCOvotes<repCOvotes){
                vetorEstado[estado].style.fill = repcolor;
                evR += contest
            }else{
                vetorEstado[estado].style.fill = demcolor;
                evD += contest
            }
            window.document.getElementById('td_demCOvotes').innerText = demCOvotes.toLocaleString('en-us');
            window.document.getElementById('td_repCOvotes').innerText = repCOvotes.toLocaleString('en-us');
            window.document.getElementById('td_libCOvotes').innerText = libCOvotes.toLocaleString('en-us');
            
            window.document.getElementById('td_demCOpercent').innerText = (100*demCOvotes/COvotes).toFixed(2)+"%";
            window.document.getElementById('td_repCOpercent').innerText = (100*repCOvotes/COvotes).toFixed(2)+"%";
            window.document.getElementById('td_libCOpercent').innerText = (100*libCOvotes/COvotes).toFixed(2)+"%";

            demUSvotes += demCOvotes
            repUSvotes += repCOvotes
            libUSvotes += libCOvotes
            break

            case 40: // New Mexico
            contest = evNM
            if(demNMvotes<repNMvotes){
                vetorEstado[estado].style.fill = repcolor;
                evR += contest
            }else{
                vetorEstado[estado].style.fill = demcolor;
                evD += contest
            }
            window.document.getElementById('td_demNMvotes').innerText = demNMvotes.toLocaleString('en-us');
            window.document.getElementById('td_repNMvotes').innerText = repNMvotes.toLocaleString('en-us');
            window.document.getElementById('td_libNMvotes').innerText = libNMvotes.toLocaleString('en-us');
            
            window.document.getElementById('td_demNMpercent').innerText = (100*demNMvotes/NMvotes).toFixed(2)+"%";
            window.document.getElementById('td_repNMpercent').innerText = (100*repNMvotes/NMvotes).toFixed(2)+"%";
            window.document.getElementById('td_libNMpercent').innerText = (100*libNMvotes/NMvotes).toFixed(2)+"%";

            demUSvotes += demNMvotes
            repUSvotes += repNMvotes
            libUSvotes += libNMvotes
            break

            case 42: // Montana
            contest = evMT
            if(demMTvotes<repMTvotes){
                vetorEstado[estado].style.fill = repcolor;
                evR += contest
            }else{
                evD += contest
                vetorEstado[estado].style.fill = demcolor;
            }
            window.document.getElementById('td_demMTvotes').innerText = demMTvotes.toLocaleString('en-us');
            window.document.getElementById('td_repMTvotes').innerText = repMTvotes.toLocaleString('en-us');
            window.document.getElementById('td_libMTvotes').innerText = libMTvotes.toLocaleString('en-us');
            
            window.document.getElementById('td_demMTpercent').innerText = (100*demMTvotes/MTvotes).toFixed(2)+"%";
            window.document.getElementById('td_repMTpercent').innerText = (100*repMTvotes/MTvotes).toFixed(2)+"%";
            window.document.getElementById('td_libMTpercent').innerText = (100*libMTvotes/MTvotes).toFixed(2)+"%";

            demUSvotes += demMTvotes
            repUSvotes += repMTvotes
            libUSvotes += libMTvotes
            break

            case 37: // Idaho
            contest = evID
            if(demIDvotes<repIDvotes){
                vetorEstado[estado].style.fill = repcolor;
                evR += contest
            }else{
                vetorEstado[estado].style.fill = demcolor;
                evD += contest
            }
            window.document.getElementById('td_demIDvotes').innerText = demIDvotes.toLocaleString('en-us');
            window.document.getElementById('td_repIDvotes').innerText = repIDvotes.toLocaleString('en-us');
            window.document.getElementById('td_libIDvotes').innerText = libIDvotes.toLocaleString('en-us');
            
            window.document.getElementById('td_demIDpercent').innerText = (100*demIDvotes/IDvotes).toFixed(2)+"%";
            window.document.getElementById('td_repIDpercent').innerText = (100*repIDvotes/IDvotes).toFixed(2)+"%";
            window.document.getElementById('td_libIDpercent').innerText = (100*libIDvotes/IDvotes).toFixed(2)+"%";

            demUSvotes += demIDvotes
            repUSvotes += repIDvotes
            libUSvotes += libIDvotes
            break

            case 43: // Utah
            contest = evUT
            if(demIDvotes<repIDvotes){
                vetorEstado[estado].style.fill = repcolor;
                evR += contest
            }else{
                vetorEstado[estado].style.fill = demcolor;
                evD += contest
            }
            window.document.getElementById('td_demUTvotes').innerText = demUTvotes.toLocaleString('en-us');
            window.document.getElementById('td_repUTvotes').innerText = repUTvotes.toLocaleString('en-us');
            window.document.getElementById('td_libUTvotes').innerText = libUTvotes.toLocaleString('en-us');
            
            window.document.getElementById('td_demUTpercent').innerText = (100*demUTvotes/UTvotes).toFixed(2)+"%";
            window.document.getElementById('td_repUTpercent').innerText = (100*repUTvotes/UTvotes).toFixed(2)+"%";
            window.document.getElementById('td_libUTpercent').innerText = (100*libUTvotes/UTvotes).toFixed(2)+"%";

            demUSvotes += demUTvotes
            repUSvotes += repUTvotes
            libUSvotes += libUTvotes
            break

            case 47: // Arizona
            contest = evAZ
            if(demAZvotes<repAZvotes){
                vetorEstado[estado].style.fill = repcolor;
                evR += contest
            }else{
                vetorEstado[estado].style.fill = demcolor;
                evD += contest
            }
            window.document.getElementById('td_demAZvotes').innerText = demAZvotes.toLocaleString('en-us');
            window.document.getElementById('td_repAZvotes').innerText = repAZvotes.toLocaleString('en-us');
            window.document.getElementById('td_libAZvotes').innerText = libAZvotes.toLocaleString('en-us');
            
            window.document.getElementById('td_demAZpercent').innerText = (100*demAZvotes/AZvotes).toFixed(2)+"%";
            window.document.getElementById('td_repAZpercent').innerText = (100*repAZvotes/AZvotes).toFixed(2)+"%";
            window.document.getElementById('td_libAZpercent').innerText = (100*libAZvotes/AZvotes).toFixed(2)+"%";

            demUSvotes += demAZvotes
            repUSvotes += repAZvotes
            libUSvotes += libAZvotes
            break

            case 48: // Nevada
            contest = evNV
            if(demNVvotes<repNVvotes){
                vetorEstado[estado].style.fill = repcolor;
                evR += contest
            }else{
                vetorEstado[estado].style.fill = demcolor;
                evD += contest
            }
            window.document.getElementById('td_demNVvotes').innerText = demNVvotes.toLocaleString('en-us');
            window.document.getElementById('td_repNVvotes').innerText = repNVvotes.toLocaleString('en-us');
            window.document.getElementById('td_libNVvotes').innerText = libNVvotes.toLocaleString('en-us');
            
            window.document.getElementById('td_demNVpercent').innerText = (100*demNVvotes/NVvotes).toFixed(2)+"%";
            window.document.getElementById('td_repNVpercent').innerText = (100*repNVvotes/NVvotes).toFixed(2)+"%";
            window.document.getElementById('td_libNVpercent').innerText = (100*libNVvotes/NVvotes).toFixed(2)+"%";

            demUSvotes += demNVvotes
            repUSvotes += repNVvotes
            libUSvotes += libNVvotes
            break

            case 35: // Washington
            contest = evWA
            if(demWAvotes<repWAvotes){
                vetorEstado[estado].style.fill = repcolor;
                evR += contest
            }else{
                vetorEstado[estado].style.fill = demcolor;
                evD += contest
            }
            window.document.getElementById('td_demWAvotes').innerText = demWAvotes.toLocaleString('en-us');
            window.document.getElementById('td_repWAvotes').innerText = repWAvotes.toLocaleString('en-us');
            window.document.getElementById('td_libWAvotes').innerText = libWAvotes.toLocaleString('en-us');
            
            window.document.getElementById('td_demWApercent').innerText = (100*demWAvotes/WAvotes).toFixed(2)+"%";
            window.document.getElementById('td_repWApercent').innerText = (100*repWAvotes/WAvotes).toFixed(2)+"%";
            window.document.getElementById('td_libWApercent').innerText = (100*libWAvotes/WAvotes).toFixed(2)+"%";

            demUSvotes += demWAvotes
            repUSvotes += repWAvotes
            libUSvotes += libWAvotes
            break

            case 46: // Oregon
            contest = evOR
            if(demORvotes<repORvotes){
                vetorEstado[estado].style.fill = repcolor;
                evR += contest
            }else{
                vetorEstado[estado].style.fill = demcolor;
                evD += contest
            }
            window.document.getElementById('td_demORvotes').innerText = demORvotes.toLocaleString('en-us');
            window.document.getElementById('td_repORvotes').innerText = repORvotes.toLocaleString('en-us');
            window.document.getElementById('td_libORvotes').innerText = libORvotes.toLocaleString('en-us');
            
            window.document.getElementById('td_demORpercent').innerText = (100*demORvotes/ORvotes).toFixed(2)+"%";
            window.document.getElementById('td_repORpercent').innerText = (100*repORvotes/ORvotes).toFixed(2)+"%";
            window.document.getElementById('td_libORpercent').innerText = (100*libORvotes/ORvotes).toFixed(2)+"%";

            demUSvotes += demORvotes
            repUSvotes += repORvotes
            libUSvotes += libORvotes
            break

            case 41: // California
            contest = evCA
            if(demCAvotes<repCAvotes){
                vetorEstado[estado].style.fill = repcolor;
                evR += contest
            }else{
                vetorEstado[estado].style.fill = demcolor;
                evD += contest
            }
            window.document.getElementById('td_demCAvotes').innerText = demCAvotes.toLocaleString('en-us');
            window.document.getElementById('td_repCAvotes').innerText = repCAvotes.toLocaleString('en-us');
            window.document.getElementById('td_libCAvotes').innerText = libCAvotes.toLocaleString('en-us');
            
            window.document.getElementById('td_demCApercent').innerText = (100*demCAvotes/CAvotes).toFixed(2)+"%";
            window.document.getElementById('td_repCApercent').innerText = (100*repCAvotes/CAvotes).toFixed(2)+"%";
            window.document.getElementById('td_libCApercent').innerText = (100*libCAvotes/CAvotes).toFixed(2)+"%";

            demUSvotes += demCAvotes
            repUSvotes += repCAvotes
            libUSvotes += libCAvotes
            break

            case 50: // Alaska
            contest = evAK
            if(demAKvotes<repAKvotes){
                vetorEstado[estado].style.fill = repcolor;
                evR += contest
            }else{
                vetorEstado[estado].style.fill = demcolor;
                evD += contest
            }
            window.document.getElementById('td_demAKvotes').innerText = demAKvotes.toLocaleString('en-us');
            window.document.getElementById('td_repAKvotes').innerText = repAKvotes.toLocaleString('en-us');
            window.document.getElementById('td_libAKvotes').innerText = libAKvotes.toLocaleString('en-us');
            
            window.document.getElementById('td_demAKpercent').innerText = (100*demAKvotes/AKvotes).toFixed(2)+"%";
            window.document.getElementById('td_repAKpercent').innerText = (100*repAKvotes/AKvotes).toFixed(2)+"%";
            window.document.getElementById('td_libAKpercent').innerText = (100*libAKvotes/AKvotes).toFixed(2)+"%";

            demUSvotes += demAKvotes
            repUSvotes += repAKvotes
            libUSvotes += libAKvotes
            break

            case 49: // Hawaii
            contest = evHI
            if(demHIvotes<repHIvotes){
                vetorEstado[estado].style.fill = repcolor;
                evR += contest
            }else{
                vetorEstado[estado].style.fill = demcolor;
                evD += contest
            }
            window.document.getElementById('td_demHIvotes').innerText = demHIvotes.toLocaleString('en-us');
            window.document.getElementById('td_repHIvotes').innerText = repHIvotes.toLocaleString('en-us');
            window.document.getElementById('td_libHIvotes').innerText = libHIvotes.toLocaleString('en-us');
            
            window.document.getElementById('td_demHIpercent').innerText = (100*demHIvotes/HIvotes).toFixed(2)+"%";
            window.document.getElementById('td_repHIpercent').innerText = (100*repHIvotes/HIvotes).toFixed(2)+"%";
            window.document.getElementById('td_libHIpercent').innerText = (100*libHIvotes/HIvotes).toFixed(2)+"%";

            demUSvotes += demHIvotes
            repUSvotes += repHIvotes
            libUSvotes += libHIvotes
            break
        }

        USvotes = demUSvotes+repUSvotes+libUSvotes

        window.document.getElementById('td_allUSvotes').innerText = USvotes.toLocaleString('en-us');

        demUSpercent = demUSvotes/USvotes
        repUSpercent = repUSvotes/USvotes
        libUSpercent = libUSvotes/USvotes

        evUS = evD+evR+evL
        evDpercent = evD/evUS
        evRpercent = evR/evUS
        evLpercent = evL/evUS

        window.document.getElementById('td_demUSvotes').innerText = demUSvotes.toLocaleString('en-us');
        window.document.getElementById('td_repUSvotes').innerText = repUSvotes.toLocaleString('en-us');
        window.document.getElementById('td_libUSvotes').innerText = libUSvotes.toLocaleString('en-us');

        window.document.getElementById('td_demUSpercent').innerText = (100*demUSpercent).toFixed(2)+"%";
        window.document.getElementById('td_repUSpercent').innerText = (100*repUSpercent).toFixed(2)+"%";
        window.document.getElementById('td_libUSpercent').innerText = (100*libUSpercent).toFixed(2)+"%";

        window.document.getElementById('td_evDpercent').innerText = (100*evDpercent).toFixed(2)+"%";
        window.document.getElementById('td_evRpercent').innerText = (100*evRpercent).toFixed(2)+"%";
        window.document.getElementById('td_evLpercent').innerText = (100*evLpercent).toFixed(2)+"%";

        estado++;
        // Interface
        window.document.getElementById('votosD').innerText = evD;
        window.document.getElementById('votosR').innerText = evR;
        if(estado>total){
            clearInterval(apuracao)
        }
    },1776)
}