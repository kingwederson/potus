// Tempo
var percentintempo = 1000

// Colégio Eleitoral
var estado = 0
var total = 50

var evD = 0
var evR = 0
var evL = 0

var evDinAK = 0, evDinAL = 0, evDinAR = 0,evDinAZ = 0, evDinCA = 0, evDinCO = 0, evDinCT = 0, evDinDC = 0, evDinDE = 0, evDinFL = 0, evDinGA = 0, evDinHI = 0, evDinIA = 0, evDinID = 0, evDinIL = 0, evDinIN = 0, evDinKS = 0, evDinKY = 0, evDinLA = 0, evDinMA = 0, evDinMD = 0, evDinME = 0, evDinMI = 0, evDinMN = 0, evDinMO = 0, evDinMS = 0, evDinMT = 0, evDinNC = 0, evDinND = 0, evDinNE = 0, evDinNH = 0, evDinNJ = 0, evDinNM = 0, evDinNV = 0, evDinNY = 0, evDinOH = 0, evDinOK = 0, evDinOR = 0, evDinPA = 0, evDinRI = 0, evDinSC = 0, evDinSD = 0, evDinTN = 0, evDinTX = 0, evDinUT = 0, evDinVA = 0, evDinVT = 0, evDinWA = 0, evDinWI = 0, evDinWV = 0, evDinWY = 0

var evRinAK = 0, evRinAL = 0, evRinAR = 0, evRinAZ = 0, evRinCA = 0, evRinCO = 0, evRinCT = 0, evRinDC = 0, evRinDE = 0, evRinFL = 0, evRinGA = 0, evRinHI = 0, evRinIA = 0, evRinID = 0, evRinIL = 0, evRinIN = 0, evRinKS = 0, evRinKY = 0, evRinLA = 0, evRinMA = 0, evRinMD = 0, evRinME = 0, evRinMI = 0, evRinMN = 0, evRinMO = 0, evRinMS = 0, evRinMT = 0, evRinNC = 0, evRinND = 0, evRinNE = 0, evRinNH = 0, evRinNJ = 0, evRinNM = 0, evRinNV = 0, evRinNY = 0, evRinOH = 0, evRinOK = 0, evRinOR = 0, evRinPA = 0, evRinRI = 0, evRinSC = 0, evRinSD = 0, evRinTN = 0, evRinTX = 0, evRinUT = 0, evRinVA = 0, evRinVT = 0, evRinWA = 0, evRinWI = 0, evRinWV = 0, evRinWY = 0

var evLinAK = 0, evLinAL = 0, evLinAR = 0, evLinAZ = 0, evLinCA = 0, evLinCO = 0, evLinCT = 0, evLinDC = 0, evLinDE = 0, evLinFL = 0, evLinGA = 0, evLinHI = 0, evLinIA = 0, evLinID = 0, evLinIL = 0, evLinIN = 0, evLinKS = 0, evLinKY = 0, evLinLA = 0, evLinMA = 0, evLinMD = 0, evLinME = 0, evLinMI = 0, evLinMN = 0, evLinMO = 0, evLinMS = 0, evLinMT = 0, evLinNC = 0, evLinND = 0, evLinNE = 0, evLinNH = 0, evLinNJ = 0, evLinNM = 0, evLinNV = 0, evLinNY = 0, evLinOH = 0, evLinOK = 0, evLinOR = 0, evLinPA = 0, evLinRI = 0, evLinSC = 0, evLinSD = 0, evLinTN = 0, evLinTX = 0, evLinUT = 0, evLinVA = 0, evLinVT = 0, evLinWA = 0, evLinWI = 0, evLinWV = 0, evLinWY = 0

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
function gauss(mean, stdev) {
    var v = Math.random();
    var u = 1 - Math.random(); // Converting [0,1) to (0,1]
    var z = Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );
    var popular = z * stdev + mean
    if(popular<0){
        return 0;
    }else
    // Transform to the desired mean and standard deviation:
    return popular;
}
// Estatísticas
var pop = {AL: 2123372, AK: 318608, AZ: 2604657, AR: 1130676, CA: 14181595, CO: 2780247, CT: 1644920, DE: 443814, DC: 311268, FL: 11067456, GA: 4114732, HI: 428937, ID: 690255, IL: 5536424, IN: 2734958, IA: 1566031, KS: 1184402, KY: 1924149, LA: 2029032, ME: 747927, MD: 2781446, MA: 3325046, MI: 4799284, MN: 2944813, MS: 1209357, MO: 2808605, MT: 497147, NE: 844227, NV: 1125385, NH: 744296, NJ: 3874046, NM: 798319, NY: 7721453, NC: 4741564, ND: 344360, OH: 5922202, OK: 1452992, OR: 2001336, PA: 6165478, RI: 464144, SC: 2103027, SD: 370093, TN: 2508027, TX: 11315056, UT: 1131430, VT: 315067, VA: 3984631, WA: 3317019, WV: 714423, WI: 2976150, WY: 255849};
var demmean = {AL: 0.34, AK: 0.41, AZ: 0.42, AR: 0.24, CA: 0.54, CO: 0.49, CT: 0.54, DE: 0.53, DC: 0.88, FL: 0.41, GA: 0.42, HI: 0.62, ID: 0.26, IL: 0.43, IN: 0.34, IA: 0.37, KS: 0.3605, KY: 0.3268, LA: 0.3845, ME: 0.4783, MD: 0.6033, MA: 0.6001, MI: 0.4727, MN: 0.4644, MS: 0.4006, MO: 0.3814, MT: 0.3575, NE: 0.337, NV: 0.4792, NH: 0.4698, NJ: 0.5545, NM: 0.4826, NY: 0.5901, NC: 0.4617, ND: 0.2723, OH: 0.4524, OK: 0.2893, OR: 0.5007, PA: 0.4746, RI: 0.5441, SC: 0.4067, SD: 0.3174, TN: 0.3472, TX: 0.4648, UT: 0.2746, VT: 0.5668, VA: 0.4973, WA: 0.5254, WV: 0.2643, WI: 0.4645, WY: 0.2188};
var repmean = {AL: 0.62, AK: 0.53, AZ: 0.46, AR: 0.57, CA: 0.31, CO: 0.39, CT: 0.41, DE: 0.42, DC: 0.06, FL: 0.49, GA: 0.48, HI: 0.30, ID: 0.55, IL: 0.34, IN: 0.55, IA: 0.49, KS: 0.5665, KY: 0.6252, LA: 0.5809, ME: 0.4487, MD: 0.3391, MA: 0.3281, MI: 0.475, MN: 0.4492, MS: 0.5786, MO: 0.5677, MT: 0.5617, NE: 0.5875, NV: 0.455, NH: 0.4661, NJ: 0.4135, NM: 0.4004, NY: 0.3652, NC: 0.4983, ND: 0.6296, OH: 0.5327, OK: 0.6532, OR: 0.3909, PA: 0.4818, RI: 0.3890, SC: 0.5494, SD: 0.6153, TN: 0.6072, TX: 0.5206, UT: 0.4554, VT: 0.3027, VA: 0.4441, WA: 0.3683, WV: 0.685, WI: 0.4722, WY: 0.6817};
var libmean = {AL: 0.04, AK: 0.06, AZ: 0.12, AR: 0.19, CA: 0.15, CO: 0.12, CT: 0.05, DE: 0.05, DC: 0.06, FL: 0.10, GA: 0.10, HI: 0.08, ID: 0.19, IL: 0.23, IN: 0.11, IA: 0.14, KS: 0.0468, KY: 0.0279, LA: 0.0187, ME: 0.0509, MD: 0.0286, MA: 0.0415, MI: 0.0359, MN: 0.0384, MS: 0.0119, MO: 0.0347, MT: 0.0564, NE: 0.0461, NV: 0.0329, NH: 0.0415, NJ: 0.0187, NM: 0.0934, NY: 0.0229, NC: 0.0274, ND: 0.0622, OH: 0.0149, OK: 0.0575, OR: 0.0471, PA: 0.0238, RI: 0.0318, SC: 0.0234, SD: 0.0563, TN: 0.0281, TX: 0.0146, UT: 0.035, VT: 0.032, VA: 0.0297, WA: 0.0485, WV: 0.0322, WI: 0.0358, WY: 0.0519};

// Estatísticas do Simulador
var particao = 100
var desvio = 0.08
var desviador = Math.sqrt(particao)

// Estilo
var demcolor = '#88f'
var repcolor = '#f88'
var libcolor = '#ff8'

var demcolorforte = '#44f'
var repcolorforte = '#f44'
var libcolorforte = '#ff4'

var chamada = 1

// Para a simulação
var demDCvotes = 0
var repDCvotes = 0
var libDCvotes = 0
var DCvotes = 0
var zzzDCvotes = pop.DC

var demMEvotes = 0
var repMEvotes = 0
var libMEvotes = 0
var MEvotes = 0
var zzzMEvotes = pop.ME

var demRIvotes = 0
var repRIvotes = 0
var libRIvotes = 0
var RIvotes = 0
var zzzRIvotes = pop.RI

var demNHvotes = 0
var repNHvotes = 0
var libNHvotes = 0
var NHvotes = 0
var zzzNHvotes = pop.NH

var demVTvotes = 0
var repVTvotes = 0
var libVTvotes = 0
var VTvotes = 0
var zzzVTvotes = pop.VT

var demMAvotes = 0
var repMAvotes = 0
var libMAvotes = 0
var MAvotes = 0
var zzzMAvotes = pop.MA

var demCTvotes = 0
var repCTvotes = 0
var libCTvotes = 0
var CTvotes = 0
var zzzCTvotes = pop.CT

var demNJvotes = 0
var repNJvotes = 0
var libNJvotes = 0
var NJvotes = 0
var zzzNJvotes = pop.NJ

var demDEvotes = 0
var repDEvotes = 0
var libDEvotes = 0
var DEvotes = 0
var zzzDEvotes = pop.DE

var demMDvotes = 0
var repMDvotes = 0
var libMDvotes = 0
var MDvotes = 0
var zzzMDvotes = pop.MD

var demNYvotes = 0
var repNYvotes = 0
var libNYvotes = 0
var NYvotes = 0
var zzzNYvotes = pop.NY

var demPAvotes = 0
var repPAvotes = 0
var libPAvotes = 0
var PAvotes = 0
var zzzPAvotes = pop.PA

var demWVvotes = 0
var repWVvotes = 0
var libWVvotes = 0
var WVvotes = 0
var zzzWVvotes = pop.WV

var demVAvotes = 0
var repVAvotes = 0
var libVAvotes = 0
var VAvotes = 0
var zzzVAvotes = pop.VA

var demSCvotes = 0
var repSCvotes = 0
var libSCvotes = 0
var SCvotes = 0
var zzzSCvotes = pop.SC

var demNCvotes = 0
var repNCvotes = 0
var libNCvotes = 0
var NCvotes = 0
var zzzNCvotes = pop.NC

var demOHvotes = 0
var repOHvotes = 0
var libOHvotes = 0
var OHvotes = 0
var zzzOHvotes = pop.OH

var demGAvotes = 0
var repGAvotes = 0
var libGAvotes = 0
var GAvotes = 0
var zzzGAvotes = pop.GA

var demINvotes = 0
var repINvotes = 0
var libINvotes = 0
var INvotes = 0
var zzzINvotes = pop.IN

var demKYvotes = 0
var repKYvotes = 0
var libKYvotes = 0
var KYvotes = 0
var zzzKYvotes = pop.KY

var demTNvotes = 0
var repTNvotes = 0
var libTNvotes = 0
var TNvotes = 0
var zzzTNvotes = pop.TN

var demMIvotes = 0
var repMIvotes = 0
var libMIvotes = 0
var MIvotes = 0
var zzzMIvotes = pop.MI

var demFLvotes = 0
var repFLvotes = 0
var libFLvotes = 0
var FLvotes = 0
var zzzFLvotes = pop.FL

var demALvotes = 0
var repALvotes = 0
var libALvotes = 0
var ALvotes = 0
var zzzALvotes = pop.AL

var demMSvotes = 0
var repMSvotes = 0
var libMSvotes = 0
var MSvotes = 0
var zzzMSvotes = pop.MS

var demWIvotes = 0
var repWIvotes = 0
var libWIvotes = 0
var WIvotes = 0
var zzzWIvotes = pop.WI

var demILvotes = 0
var repILvotes = 0
var libILvotes = 0
var ILvotes = 0
var zzzILvotes = pop.IL

var demMNvotes = 0
var repMNvotes = 0
var libMNvotes = 0
var MNvotes = 0
var zzzMNvotes = pop.MN

var demIAvotes = 0
var repIAvotes = 0
var libIAvotes = 0
var IAvotes = 0
var zzzIAvotes = pop.IA

var demMOvotes = 0
var repMOvotes = 0
var libMOvotes = 0
var MOvotes = 0
var zzzMOvotes = pop.MO

var demARvotes = 0
var repARvotes = 0
var libARvotes = 0
var ARvotes = 0
var zzzARvotes = pop.AR

var demLAvotes = 0
var repLAvotes = 0
var libLAvotes = 0
var LAvotes = 0
var zzzLAvotes = pop.LA

var demNDvotes = 0
var repNDvotes = 0
var libNDvotes = 0
var NDvotes = 0
var zzzNDvotes = pop.ND

var demSDvotes = 0
var repSDvotes = 0
var libSDvotes = 0
var SDvotes = 0
var zzzSDvotes = pop.SD

var demNEvotes = 0
var repNEvotes = 0
var libNEvotes = 0
var NEvotes = 0
var zzzNEvotes = pop.NE

var demKSvotes = 0
var repKSvotes = 0
var libKSvotes = 0
var KSvotes = 0
var zzzKSvotes = pop.KS

var demOKvotes = 0
var repOKvotes = 0
var libOKvotes = 0
var OKvotes = 0
var zzzOKvotes = pop.OK

var demTXvotes = 0
var repTXvotes = 0
var libTXvotes = 0
var TXvotes = 0
var zzzTXvotes = pop.TX

var demWYvotes = 0
var repWYvotes = 0
var libWYvotes = 0
var WYvotes = 0
var zzzWYvotes = pop.WY

var demCOvotes = 0
var repCOvotes = 0
var libCOvotes = 0
var COvotes = 0
var zzzCOvotes = pop.CO

var demNMvotes = 0
var repNMvotes = 0
var libNMvotes = 0
var NMvotes = 0
var zzzNMvotes = pop.NM

var demMTvotes = 0
var repMTvotes = 0
var libMTvotes = 0
var MTvotes = 0
var zzzMTvotes = pop.MT

var demIDvotes = 0
var repIDvotes = 0
var libIDvotes = 0
var IDvotes = 0
var zzzIDvotes = pop.ID

var demUTvotes = 0
var repUTvotes = 0
var libUTvotes = 0
var UTvotes = 0
var zzzUTvotes = pop.UT

var demAZvotes = 0
var repAZvotes = 0
var libAZvotes = 0
var AZvotes = 0
var zzzAZvotes = pop.AZ

var demNVvotes = 0
var repNVvotes = 0
var libNVvotes = 0
var NVvotes = 0
var zzzNVvotes = pop.NV

var demWAvotes = 0
var repWAvotes = 0
var libWAvotes = 0
var WAvotes = 0
var zzzWAvotes = pop.WA

var demORvotes = 0
var repORvotes = 0
var libORvotes = 0
var ORvotes = 0
var zzzORvotes = pop.OR

var demCAvotes = 0
var repCAvotes = 0
var libCAvotes = 0
var CAvotes = 0
var zzzCAvotes = pop.CA

var demAKvotes = 0
var repAKvotes = 0
var libAKvotes = 0
var AKvotes = 0
var zzzAKvotes = pop.AK

var demHIvotes = 0
var repHIvotes = 0
var libHIvotes = 0
var HIvotes = 0
var zzzHIvotes = pop.HI

var demUSvotes = 0
var repUSvotes = 0
var libUSvotes = 0

var USvotes = 1
var demUSpercent = 0
var repUSpercent = 0
var libUSpercent = 0
// Chamadas
var vetorEstado = window.document.getElementsByClassName('state')
function votar(){
    window.document.getElementById('apurador').style.display = 'none';
    setTimeout(function(){
        contest = evDC
        var DCpercentin = 0
    
        var votaDC = setInterval(function(){
    
            var NOVOdem = parseInt(pop.DC*gauss(demmean.DC,desvio)/particao)
            var NOVOrep = parseInt(pop.DC*gauss(repmean.DC,desvio)/particao)
            var NOVOlib = parseInt(pop.DC*gauss(libmean.DC,desvio)/particao)
    
            demDCvotes += NOVOdem
            repDCvotes += NOVOrep
            libDCvotes += NOVOlib
    
            DCvotes = demDCvotes+repDCvotes+libDCvotes
            zzzDCvotes = pop.DC-DCvotes
    
            demUSvotes += NOVOdem
            repUSvotes += NOVOrep
            libUSvotes += NOVOlib
    
            if(demDCvotes>repDCvotes && demDCvotes>libDCvotes){
                vetorEstado[0].style.fill = demcolor;
                if(zzzDCvotes+repDCvotes<demDCvotes/chamada && zzzDCvotes+libDCvotes<demDCvotes/chamada){
                    vetorEstado[0].style.fill = demcolorforte;
                    evDinDC = evDC
                }
            }else if(repDCvotes>demDCvotes && repDCvotes>libDCvotes){
                vetorEstado[0].style.fill = repcolor;
                if(zzzDCvotes+demDCvotes<repDCvotes/chamada && zzzDCvotes+libDCvotes<repDCvotes/chamada){
                    vetorEstado[0].style.fill = repcolorforte;
                    evRinDC = evDC
                }
            }else{
                vetorEstado[0].style.fill = libcolor;
            }
    
            window.document.getElementById('td_demDCvotes').innerText = demDCvotes.toLocaleString('en-us');
            window.document.getElementById('td_repDCvotes').innerText = repDCvotes.toLocaleString('en-us');
            window.document.getElementById('td_libDCvotes').innerText = libDCvotes.toLocaleString('en-us');
            window.document.getElementById('td_demDCpercent').innerText = (100*demDCvotes/DCvotes).toFixed(2)+"%";
            window.document.getElementById('td_repDCpercent').innerText = (100*repDCvotes/DCvotes).toFixed(2)+"%";
            window.document.getElementById('td_libDCpercent').innerText = (100*libDCvotes/DCvotes).toFixed(2)+"%";
    
            DCpercentin += 1
            window.document.getElementById('td_DCpercentin').innerText = DCpercentin.toFixed(0)+"%";
    
            if(DCpercentin==100){
                clearInterval(votaDC)
            }
    
        },percentintempo)
    },10*percentintempo)


    setTimeout(function(){
        contest = evME
        var MEpercentin = 0

        var votaME = setInterval(function(){

            var NOVOdem = parseInt(pop.ME*gauss(demmean.ME,desvio)/particao)
            var NOVOrep = parseInt(pop.ME*gauss(repmean.ME,desvio)/particao)
            var NOVOlib = parseInt(pop.ME*gauss(libmean.ME,desvio)/particao)

            demMEvotes += NOVOdem
            repMEvotes += NOVOrep
            libMEvotes += NOVOlib

            MEvotes = demMEvotes+repMEvotes+libMEvotes
            zzzMEvotes = pop.ME-MEvotes

            demUSvotes += NOVOdem
            repUSvotes += NOVOrep
            libUSvotes += NOVOlib

            MEvotes = demMEvotes+repMEvotes+libMEvotes
            if(demMEvotes>repMEvotes && demMEvotes>libMEvotes){
                vetorEstado[11].style.fill = demcolor;
                if(zzzMEvotes+repMEvotes<demMEvotes/chamada && zzzMEvotes+libMEvotes<demMEvotes/chamada){
                    vetorEstado[11].style.fill = demcolorforte;
                    evDinME = evME
                    evRinME = 0
                }
            }else if(repMEvotes>demMEvotes && repMEvotes>libMEvotes){
                vetorEstado[11].style.fill = repcolor;
                if(zzzMEvotes+demMEvotes<repMEvotes/chamada && zzzMEvotes+libMEvotes<repMEvotes/chamada){
                    vetorEstado[11].style.fill = repcolorforte;
                    evRinME = evME
                    evDinME = 0
                }
            }else{
                vetorEstado[11].style.fill = libcolor;
            }

            window.document.getElementById('td_demMEvotes').innerText = demMEvotes.toLocaleString('en-us');
            window.document.getElementById('td_repMEvotes').innerText = repMEvotes.toLocaleString('en-us');
            window.document.getElementById('td_libMEvotes').innerText = libMEvotes.toLocaleString('en-us');
            window.document.getElementById('td_demMEpercent').innerText = (100*demMEvotes/MEvotes).toFixed(2)+"%";
            window.document.getElementById('td_repMEpercent').innerText = (100*repMEvotes/MEvotes).toFixed(2)+"%";
            window.document.getElementById('td_libMEpercent').innerText = (100*libMEvotes/MEvotes).toFixed(2)+"%";

            MEpercentin += 1
            window.document.getElementById('td_MEpercentin').innerText = MEpercentin.toFixed(0)+"%";

            if(MEpercentin==100){
                clearInterval(votaME)
                if(demMEvotes>repMEvotes){
                    vetorEstado[11].style.fill = demcolorforte;
                    evDinMI = evME
                }else if(repMIvotes>demMIvotes){
                    vetorEstado[11].style.fill = repcolorforte;
                    evRinMI = evME
                }
            }

        },percentintempo)
    },0*percentintempo)

    setTimeout(function(){
        contest = evNH
        var NHpercentin = 0
    
        var votaNH = setInterval(function(){
    
            var NOVOdem = parseInt(pop.NH*gauss(demmean.NH,desvio)/particao)
            var NOVOrep = parseInt(pop.NH*gauss(repmean.NH,desvio)/particao)
            var NOVOlib = parseInt(pop.NH*gauss(libmean.NH,desvio)/particao)
    
            demNHvotes += NOVOdem
            repNHvotes += NOVOrep
            libNHvotes += NOVOlib
    
            NHvotes = demNHvotes+repNHvotes+libNHvotes
            zzzNHvotes = pop.NH-NHvotes
    
            demUSvotes += NOVOdem
            repUSvotes += NOVOrep
            libUSvotes += NOVOlib
    
            if(demNHvotes>repNHvotes && demNHvotes>libNHvotes){
                vetorEstado[18].style.fill = demcolor;
                if(zzzNHvotes+repNHvotes<demNHvotes/chamada && zzzNHvotes+libNHvotes<demNHvotes/chamada){
                    vetorEstado[18].style.fill = demcolorforte;
                    evDinNH = evNH
                    evRinNH = 0
                }
            }else if(repNHvotes>demNHvotes && repNHvotes>libNHvotes){
                vetorEstado[18].style.fill = repcolor;
                if(zzzNHvotes+demNHvotes<repNHvotes/chamada && zzzNHvotes+libNHvotes<repNHvotes/chamada){
                    vetorEstado[18].style.fill = repcolorforte;
                    evRinNH = evNH
                    evDinNH = 0
                }
            }else{
                vetorEstado[18].style.fill = libcolor;
            }
    
            window.document.getElementById('td_demNHvotes').innerText = demNHvotes.toLocaleString('en-us');
            window.document.getElementById('td_repNHvotes').innerText = repNHvotes.toLocaleString('en-us');
            window.document.getElementById('td_libNHvotes').innerText = libNHvotes.toLocaleString('en-us');
            window.document.getElementById('td_demNHpercent').innerText = (100*demNHvotes/NHvotes).toFixed(2)+"%";
            window.document.getElementById('td_repNHpercent').innerText = (100*repNHvotes/NHvotes).toFixed(2)+"%";
            window.document.getElementById('td_libNHpercent').innerText = (100*libNHvotes/NHvotes).toFixed(2)+"%";
    
            NHpercentin += 1
            window.document.getElementById('td_NHpercentin').innerText = NHpercentin.toFixed(0)+"%";
    
            if(NHpercentin==100){
                clearInterval(votaNH)
                if(demNHvotes>repNHvotes){
                    vetorEstado[18].style.fill = demcolorforte;
                    evDinNH = evNH
                }else if(repNHvotes>demNHvotes){
                    vetorEstado[18].style.fill = repcolorforte;
                    evRinNH = evNH
                }
            }
    
        },percentintempo)
    },4*percentintempo)

    setTimeout(function(){
        contest = evVT
        var VTpercentin = 0
    
        var votaVT = setInterval(function(){
    
            var NOVOdem = parseInt(pop.VT*gauss(demmean.VT,desvio)/particao)
            var NOVOrep = parseInt(pop.VT*gauss(repmean.VT,desvio)/particao)
            var NOVOlib = parseInt(pop.VT*gauss(libmean.VT,desvio)/particao)
    
            demVTvotes += NOVOdem
            repVTvotes += NOVOrep
            libVTvotes += NOVOlib
    
            VTvotes = demVTvotes+repVTvotes+libVTvotes
            zzzVTvotes = pop.VT-VTvotes
    
            demUSvotes += NOVOdem
            repUSvotes += NOVOrep
            libUSvotes += NOVOlib
    
            if(demVTvotes>repVTvotes && demVTvotes>libVTvotes){
                vetorEstado[2].style.fill = demcolor;
                if(zzzVTvotes+repVTvotes<demVTvotes/chamada && zzzVTvotes+libVTvotes<demVTvotes/chamada){
                    vetorEstado[2].style.fill = demcolorforte;
                    evDinVT = evVT
                }
            }else if(repVTvotes>demVTvotes && repVTvotes>libVTvotes){
                vetorEstado[2].style.fill = repcolor;
                if(zzzVTvotes+demVTvotes<repVTvotes/chamada && zzzVTvotes+libVTvotes<repVTvotes/chamada){
                    vetorEstado[2].style.fill = repcolorforte;
                    evRinVT = evVT
                }
            }else{
                vetorEstado[2].style.fill = libcolor;
            }
    
            window.document.getElementById('td_demVTvotes').innerText = demVTvotes.toLocaleString('en-us');
            window.document.getElementById('td_repVTvotes').innerText = repVTvotes.toLocaleString('en-us');
            window.document.getElementById('td_libVTvotes').innerText = libVTvotes.toLocaleString('en-us');
            window.document.getElementById('td_demVTpercent').innerText = (100*demVTvotes/VTvotes).toFixed(2)+"%";
            window.document.getElementById('td_repVTpercent').innerText = (100*repVTvotes/VTvotes).toFixed(2)+"%";
            window.document.getElementById('td_libVTpercent').innerText = (100*libVTvotes/VTvotes).toFixed(2)+"%";
    
            VTpercentin += 1
            window.document.getElementById('td_VTpercentin').innerText = VTpercentin.toFixed(0)+"%";
    
            if(VTpercentin==100){
                clearInterval(votaVT)
            }
    
        },percentintempo)
    },8*percentintempo)

    setTimeout(function(){
        contest = evMA
        var MApercentin = 0
    
        var votaMA = setInterval(function(){
    
            var NOVOdem = parseInt(pop.MA*gauss(demmean.MA,desvio)/particao)
            var NOVOrep = parseInt(pop.MA*gauss(repmean.MA,desvio)/particao)
            var NOVOlib = parseInt(pop.MA*gauss(libmean.MA,desvio)/particao)
    
            demMAvotes += NOVOdem
            repMAvotes += NOVOrep
            libMAvotes += NOVOlib
    
            MAvotes = demMAvotes+repMAvotes+libMAvotes
            zzzMAvotes = pop.MA-MAvotes
    
            demUSvotes += NOVOdem
            repUSvotes += NOVOrep
            libUSvotes += NOVOlib
    
            if(demMAvotes>repMAvotes && demMAvotes>libMAvotes){
                vetorEstado[1].style.fill = demcolor;
                if(zzzMAvotes+repMAvotes<demMAvotes/chamada && zzzMAvotes+libMAvotes<demMAvotes/chamada){
                    vetorEstado[1].style.fill = demcolorforte;
                    evDinMA = evMA
                }
            }else if(repMAvotes>demMAvotes && repMAvotes>libMAvotes){
                vetorEstado[1].style.fill = repcolor;
                if(zzzMAvotes+demMAvotes<repMAvotes/chamada && zzzMAvotes+libMAvotes<repMAvotes/chamada){
                    vetorEstado[1].style.fill = repcolorforte;
                    evRinMA = evMA
                }
            }else{
                vetorEstado[1].style.fill = libcolor;
            }
    
            window.document.getElementById('td_demMAvotes').innerText = demMAvotes.toLocaleString('en-us');
            window.document.getElementById('td_repMAvotes').innerText = repMAvotes.toLocaleString('en-us');
            window.document.getElementById('td_libMAvotes').innerText = libMAvotes.toLocaleString('en-us');
            window.document.getElementById('td_demMApercent').innerText = (100*demMAvotes/MAvotes).toFixed(2)+"%";
            window.document.getElementById('td_repMApercent').innerText = (100*repMAvotes/MAvotes).toFixed(2)+"%";
            window.document.getElementById('td_libMApercent').innerText = (100*libMAvotes/MAvotes).toFixed(2)+"%";
    
            MApercentin += 1
            window.document.getElementById('td_MApercentin').innerText = MApercentin.toFixed(0)+"%";
    
            if(MApercentin==100){
                clearInterval(votaMA)
            }
    
        },percentintempo)
    },3*percentintempo)

    setTimeout(function(){
        contest = evRI
        var RIpercentin = 0
    
        var votaRI = setInterval(function(){
    
            var NOVOdem = parseInt(pop.RI*gauss(demmean.RI,desvio)/particao)
            var NOVOrep = parseInt(pop.RI*gauss(repmean.RI,desvio)/particao)
            var NOVOlib = parseInt(pop.RI*gauss(libmean.RI,desvio)/particao)
    
            demRIvotes += NOVOdem
            repRIvotes += NOVOrep
            libRIvotes += NOVOlib
    
            RIvotes = demRIvotes+repRIvotes+libRIvotes
            zzzRIvotes = pop.RI-RIvotes
    
            demUSvotes += NOVOdem
            repUSvotes += NOVOrep
            libUSvotes += NOVOlib
    
            if(demRIvotes>repRIvotes && demRIvotes>libRIvotes){
                vetorEstado[4].style.fill = demcolor;
                if(zzzRIvotes+repRIvotes<demRIvotes/chamada && zzzRIvotes+libRIvotes<demRIvotes/chamada){
                    vetorEstado[4].style.fill = demcolorforte;
                    evDinRI = evRI
                    evRinRI = 0
                }
            }else if(repRIvotes>demRIvotes && repRIvotes>libRIvotes){
                vetorEstado[4].style.fill = repcolor;
                if(zzzRIvotes+demRIvotes<repRIvotes/chamada && zzzRIvotes+libRIvotes<repRIvotes/chamada){
                    vetorEstado[4].style.fill = repcolorforte;
                    evRinRI = evRI
                    evDinRI = 0
                }
            }else{
                vetorEstado[4].style.fill = libcolor;
            }
    
            window.document.getElementById('td_demRIvotes').innerText = demRIvotes.toLocaleString('en-us');
            window.document.getElementById('td_repRIvotes').innerText = repRIvotes.toLocaleString('en-us');
            window.document.getElementById('td_libRIvotes').innerText = libRIvotes.toLocaleString('en-us');
            window.document.getElementById('td_demRIpercent').innerText = (100*demRIvotes/RIvotes).toFixed(2)+"%";
            window.document.getElementById('td_repRIpercent').innerText = (100*repRIvotes/RIvotes).toFixed(2)+"%";
            window.document.getElementById('td_libRIpercent').innerText = (100*libRIvotes/RIvotes).toFixed(2)+"%";
    
            RIpercentin += 1
            window.document.getElementById('td_RIpercentin').innerText = RIpercentin.toFixed(0)+"%";
    
            if(RIpercentin==100){
                clearInterval(votaRI)
            }
    
        },percentintempo)
    },5*percentintempo)

    setTimeout(function(){
        contest = evCT
        var CTpercentin = 0
    
        var votaCT = setInterval(function(){
    
            var NOVOdem = parseInt(pop.CT*gauss(demmean.CT,desvio)/particao)
            var NOVOrep = parseInt(pop.CT*gauss(repmean.CT,desvio)/particao)
            var NOVOlib = parseInt(pop.CT*gauss(libmean.CT,desvio)/particao)
    
            demCTvotes += NOVOdem
            repCTvotes += NOVOrep
            libCTvotes += NOVOlib
    
            CTvotes = demCTvotes+repCTvotes+libCTvotes
            zzzCTvotes = pop.CT-CTvotes
    
            demUSvotes += NOVOdem
            repUSvotes += NOVOrep
            libUSvotes += NOVOlib
    
            if(demCTvotes>repCTvotes && demCTvotes>libCTvotes){
                vetorEstado[7].style.fill = demcolor;
                if(zzzCTvotes+repCTvotes<demCTvotes/chamada && zzzCTvotes+libCTvotes<demCTvotes/chamada){
                    vetorEstado[7].style.fill = demcolorforte;
                    evDinCT = evCT
                }
            }else if(repCTvotes>demCTvotes && repCTvotes>libCTvotes){
                vetorEstado[7].style.fill = repcolor;
                if(zzzCTvotes+demCTvotes<repCTvotes/chamada && zzzCTvotes+libCTvotes<repCTvotes/chamada){
                    vetorEstado[7].style.fill = repcolorforte;
                    evRinCT = evCT
                }
            }else{
                vetorEstado[7].style.fill = libcolor;
            }
    
            window.document.getElementById('td_demCTvotes').innerText = demCTvotes.toLocaleString('en-us');
            window.document.getElementById('td_repCTvotes').innerText = repCTvotes.toLocaleString('en-us');
            window.document.getElementById('td_libCTvotes').innerText = libCTvotes.toLocaleString('en-us');
            window.document.getElementById('td_demCTpercent').innerText = (100*demCTvotes/CTvotes).toFixed(2)+"%";
            window.document.getElementById('td_repCTpercent').innerText = (100*repCTvotes/CTvotes).toFixed(2)+"%";
            window.document.getElementById('td_libCTpercent').innerText = (100*libCTvotes/CTvotes).toFixed(2)+"%";
    
            CTpercentin += 1
            window.document.getElementById('td_CTpercentin').innerText = CTpercentin.toFixed(0)+"%";
    
            if(CTpercentin==100){
                clearInterval(votaCT)
            }
    
        },percentintempo)
    },7*percentintempo)

    setTimeout(function(){
        contest = evNY
        var NYpercentin = 0
    
        var votaNY = setInterval(function(){
    
            var NOVOdem = parseInt(pop.NY*gauss(demmean.NY,desvio)/particao)
            var NOVOrep = parseInt(pop.NY*gauss(repmean.NY,desvio)/particao)
            var NOVOlib = parseInt(pop.NY*gauss(libmean.NY,desvio)/particao)
    
            demNYvotes += NOVOdem
            repNYvotes += NOVOrep
            libNYvotes += NOVOlib
    
            NYvotes = demNYvotes+repNYvotes+libNYvotes
            zzzNYvotes = pop.NY-NYvotes
    
            demUSvotes += NOVOdem
            repUSvotes += NOVOrep
            libUSvotes += NOVOlib
    
            if(demNYvotes>repNYvotes && demNYvotes>libNYvotes){
                vetorEstado[6].style.fill = demcolor;
                if(zzzNYvotes+repNYvotes<demNYvotes/chamada && zzzNYvotes+libNYvotes<demNYvotes/chamada){
                    vetorEstado[6].style.fill = demcolorforte;
                    evDinNY = evNY
                }
            }else if(repNYvotes>demNYvotes && repNYvotes>libNYvotes){
                vetorEstado[6].style.fill = repcolor;
                if(zzzNYvotes+demNYvotes<repNYvotes/chamada && zzzNYvotes+libNYvotes<repNYvotes/chamada){
                    vetorEstado[6].style.fill = repcolorforte;
                    evRinNY = evNY
                }
            }else{
                vetorEstado[6].style.fill = libcolor;
            }
    
            window.document.getElementById('td_demNYvotes').innerText = demNYvotes.toLocaleString('en-us');
            window.document.getElementById('td_repNYvotes').innerText = repNYvotes.toLocaleString('en-us');
            window.document.getElementById('td_libNYvotes').innerText = libNYvotes.toLocaleString('en-us');
            window.document.getElementById('td_demNYpercent').innerText = (100*demNYvotes/NYvotes).toFixed(2)+"%";
            window.document.getElementById('td_repNYpercent').innerText = (100*repNYvotes/NYvotes).toFixed(2)+"%";
            window.document.getElementById('td_libNYpercent').innerText = (100*libNYvotes/NYvotes).toFixed(2)+"%";
    
            NYpercentin += 1
            window.document.getElementById('td_NYpercentin').innerText = NYpercentin.toFixed(0)+"%";
    
            if(NYpercentin==100){
                clearInterval(votaNY)
            }
    
        },percentintempo)
    },13*percentintempo)

    setTimeout(function(){
        contest = evPA
        var PApercentin = 0
    
        var votaPA = setInterval(function(){
    
            var NOVOdem = parseInt(pop.PA*gauss(demmean.PA,desvio)/particao)
            var NOVOrep = parseInt(pop.PA*gauss(repmean.PA,desvio)/particao)
            var NOVOlib = parseInt(pop.PA*gauss(libmean.PA,desvio)/particao)
    
            demPAvotes += NOVOdem
            repPAvotes += NOVOrep
            libPAvotes += NOVOlib
    
            PAvotes = demPAvotes+repPAvotes+libPAvotes
            zzzPAvotes = pop.PA-PAvotes
    
            demUSvotes += NOVOdem
            repUSvotes += NOVOrep
            libUSvotes += NOVOlib
    
            if(demPAvotes>repPAvotes && demPAvotes>libPAvotes){
                vetorEstado[26].style.fill = demcolor;
                if(zzzPAvotes+repPAvotes<demPAvotes/chamada && zzzPAvotes+libPAvotes<demPAvotes/chamada){
                    vetorEstado[26].style.fill = demcolorforte;
                    evDinPA = evPA
                    evRinPA = 0
                }
            }else if(repPAvotes>demPAvotes && repPAvotes>libPAvotes){
                vetorEstado[26].style.fill = repcolor;
                if(zzzPAvotes+demPAvotes<repPAvotes/chamada && zzzPAvotes+libPAvotes<repPAvotes/chamada){
                    vetorEstado[26].style.fill = repcolorforte;
                    evRinPA = evPA
                    evDinPA = 0
                }
            }else{
                vetorEstado[26].style.fill = libcolor;
            }
    
            window.document.getElementById('td_demPAvotes').innerText = demPAvotes.toLocaleString('en-us');
            window.document.getElementById('td_repPAvotes').innerText = repPAvotes.toLocaleString('en-us');
            window.document.getElementById('td_libPAvotes').innerText = libPAvotes.toLocaleString('en-us');
            window.document.getElementById('td_demPApercent').innerText = (100*demPAvotes/PAvotes).toFixed(2)+"%";
            window.document.getElementById('td_repPApercent').innerText = (100*repPAvotes/PAvotes).toFixed(2)+"%";
            window.document.getElementById('td_libPApercent').innerText = (100*libPAvotes/PAvotes).toFixed(2)+"%";
    
            PApercentin += 1
            window.document.getElementById('td_PApercentin').innerText = PApercentin.toFixed(0)+"%";
    
            if(PApercentin==100){
                clearInterval(votaPA)
                if(demPAvotes>repPAvotes){
                    vetorEstado[26].style.fill = demcolorforte;
                    evDinPA = evPA
                }else if(repPAvotes>demPAvotes){
                    vetorEstado[26].style.fill = repcolorforte;
                    evRinPA = evPA
                }
            }
    
        },percentintempo)
    },8*percentintempo)

    setTimeout(function(){
        contest = evMD
        var MDpercentin = 0
    
        var votaMD = setInterval(function(){
    
            var NOVOdem = parseInt(pop.MD*gauss(demmean.MD,desvio)/particao)
            var NOVOrep = parseInt(pop.MD*gauss(repmean.MD,desvio)/particao)
            var NOVOlib = parseInt(pop.MD*gauss(libmean.MD,desvio)/particao)
    
            demMDvotes += NOVOdem
            repMDvotes += NOVOrep
            libMDvotes += NOVOlib
    
            MDvotes = demMDvotes+repMDvotes+libMDvotes
            zzzMDvotes = pop.MD-MDvotes
    
            demUSvotes += NOVOdem
            repUSvotes += NOVOrep
            libUSvotes += NOVOlib
    
            if(demMDvotes>repMDvotes && demMDvotes>libMDvotes){
                vetorEstado[3].style.fill = demcolor;
                if(zzzMDvotes+repMDvotes<demMDvotes/chamada && zzzMDvotes+libMDvotes<demMDvotes/chamada){
                    vetorEstado[3].style.fill = demcolorforte;
                    evDinMD = evMD
                }
            }else if(repMDvotes>demMDvotes && repMDvotes>libMDvotes){
                vetorEstado[3].style.fill = repcolor;
                if(zzzMDvotes+demMDvotes<repMDvotes/chamada && zzzMDvotes+libMDvotes<repMDvotes/chamada){
                    vetorEstado[3].style.fill = repcolorforte;
                    evRinMD = evMD
                }
            }else{
                vetorEstado[3].style.fill = libcolor;
            }
    
            window.document.getElementById('td_demMDvotes').innerText = demMDvotes.toLocaleString('en-us');
            window.document.getElementById('td_repMDvotes').innerText = repMDvotes.toLocaleString('en-us');
            window.document.getElementById('td_libMDvotes').innerText = libMDvotes.toLocaleString('en-us');
            window.document.getElementById('td_demMDpercent').innerText = (100*demMDvotes/MDvotes).toFixed(2)+"%";
            window.document.getElementById('td_repMDpercent').innerText = (100*repMDvotes/MDvotes).toFixed(2)+"%";
            window.document.getElementById('td_libMDpercent').innerText = (100*libMDvotes/MDvotes).toFixed(2)+"%";
    
            MDpercentin += 1
            window.document.getElementById('td_MDpercentin').innerText = MDpercentin.toFixed(0)+"%";
    
            if(MDpercentin==100){
                clearInterval(votaMD)
            }
    
        },percentintempo)
    },8*percentintempo)

    setTimeout(function(){
        contest = evNJ
        var NJpercentin = 0
    
        var votaNJ = setInterval(function(){
    
            var NOVOdem = parseInt(pop.NJ*gauss(demmean.NJ,desvio)/particao)
            var NOVOrep = parseInt(pop.NJ*gauss(repmean.NJ,desvio)/particao)
            var NOVOlib = parseInt(pop.NJ*gauss(libmean.NJ,desvio)/particao)
    
            demNJvotes += NOVOdem
            repNJvotes += NOVOrep
            libNJvotes += NOVOlib
    
            NJvotes = demNJvotes+repNJvotes+libNJvotes
            zzzNJvotes = pop.NJ-NJvotes
    
            demUSvotes += NOVOdem
            repUSvotes += NOVOrep
            libUSvotes += NOVOlib
    
            if(demNJvotes>repNJvotes && demNJvotes>libNJvotes){
                vetorEstado[8].style.fill = demcolor;
                if(zzzNJvotes+repNJvotes<demNJvotes/chamada && zzzNJvotes+libNJvotes<demNJvotes/chamada){
                    vetorEstado[8].style.fill = demcolorforte;
                    evDinNJ = evNJ
                }
            }else if(repNJvotes>demNJvotes && repNJvotes>libNJvotes){
                vetorEstado[8].style.fill = repcolor;
                if(zzzNJvotes+demNJvotes<repNJvotes/chamada && zzzNJvotes+libNJvotes<repNJvotes/chamada){
                    vetorEstado[8].style.fill = repcolorforte;
                    evRinNJ = evNJ
                }
            }else{
                vetorEstado[8].style.fill = libcolor;
            }
    
            window.document.getElementById('td_demNJvotes').innerText = demNJvotes.toLocaleString('en-us');
            window.document.getElementById('td_repNJvotes').innerText = repNJvotes.toLocaleString('en-us');
            window.document.getElementById('td_libNJvotes').innerText = libNJvotes.toLocaleString('en-us');
            window.document.getElementById('td_demNJpercent').innerText = (100*demNJvotes/NJvotes).toFixed(2)+"%";
            window.document.getElementById('td_repNJpercent').innerText = (100*repNJvotes/NJvotes).toFixed(2)+"%";
            window.document.getElementById('td_libNJpercent').innerText = (100*libNJvotes/NJvotes).toFixed(2)+"%";
    
            NJpercentin += 1
            window.document.getElementById('td_NJpercentin').innerText = NJpercentin.toFixed(0)+"%";
    
            if(NJpercentin==100){
                clearInterval(votaNJ)
            }
    
        },percentintempo)
    },7*percentintempo)

    setTimeout(function(){
        contest = evDE
        var DEpercentin = 0
    
        var votaDE = setInterval(function(){
    
            var NOVOdem = parseInt(pop.DE*gauss(demmean.DE,desvio)/particao)
            var NOVOrep = parseInt(pop.DE*gauss(repmean.DE,desvio)/particao)
            var NOVOlib = parseInt(pop.DE*gauss(libmean.DE,desvio)/particao)
    
            demDEvotes += NOVOdem
            repDEvotes += NOVOrep
            libDEvotes += NOVOlib
    
            DEvotes = demDEvotes+repDEvotes+libDEvotes
            zzzDEvotes = pop.DE-DEvotes
    
            demUSvotes += NOVOdem
            repUSvotes += NOVOrep
            libUSvotes += NOVOlib
    
            if(demDEvotes>repDEvotes && demDEvotes>libDEvotes){
                vetorEstado[13].style.fill = demcolor;
                if(zzzDEvotes+repDEvotes<demDEvotes/chamada && zzzDEvotes+libDEvotes<demDEvotes/chamada){
                    vetorEstado[13].style.fill = demcolorforte;
                    evDinDE = evDE
                }
            }else if(repDEvotes>demDEvotes && repDEvotes>libDEvotes){
                vetorEstado[13].style.fill = repcolor;
                if(zzzDEvotes+demDEvotes<repDEvotes/chamada && zzzDEvotes+libDEvotes<repDEvotes/chamada){
                    vetorEstado[13].style.fill = repcolorforte;
                    evRinDE = evDE
                }
            }else{
                vetorEstado[13].style.fill = libcolor;
            }
    
            window.document.getElementById('td_demDEvotes').innerText = demDEvotes.toLocaleString('en-us');
            window.document.getElementById('td_repDEvotes').innerText = repDEvotes.toLocaleString('en-us');
            window.document.getElementById('td_libDEvotes').innerText = libDEvotes.toLocaleString('en-us');
            window.document.getElementById('td_demDEpercent').innerText = (100*demDEvotes/DEvotes).toFixed(2)+"%";
            window.document.getElementById('td_repDEpercent').innerText = (100*repDEvotes/DEvotes).toFixed(2)+"%";
            window.document.getElementById('td_libDEpercent').innerText = (100*libDEvotes/DEvotes).toFixed(2)+"%";
    
            DEpercentin += 1
            window.document.getElementById('td_DEpercentin').innerText = DEpercentin.toFixed(0)+"%";
    
            if(DEpercentin==100){
                clearInterval(votaDE)
            }
    
        },percentintempo)
    },9*percentintempo)

    setTimeout(function(){
        contest = evFL
        var FLpercentin = 0
    
        var votaFL = setInterval(function(){
    
            var NOVOdem = parseInt(pop.FL*gauss(demmean.FL,desvio)/particao)
            var NOVOrep = parseInt(pop.FL*gauss(repmean.FL,desvio)/particao)
            var NOVOlib = parseInt(pop.FL*gauss(libmean.FL,desvio)/particao)
    
            demFLvotes += NOVOdem
            repFLvotes += NOVOrep
            libFLvotes += NOVOlib
    
            FLvotes = demFLvotes+repFLvotes+libFLvotes
            zzzFLvotes = pop.FL-FLvotes
    
            demUSvotes += NOVOdem
            repUSvotes += NOVOrep
            libUSvotes += NOVOlib
    
            if(demFLvotes>repFLvotes && demFLvotes>libFLvotes){
                vetorEstado[34].style.fill = demcolor;
                if(zzzFLvotes+repFLvotes<demFLvotes/chamada && zzzFLvotes+libFLvotes<demFLvotes/chamada){
                    vetorEstado[34].style.fill = demcolorforte;
                    evDinFL = evFL
                    evRinFL = 0
                }
            }else if(repFLvotes>demFLvotes && repFLvotes>libFLvotes){
                vetorEstado[34].style.fill = repcolor;
                if(zzzFLvotes+demFLvotes<repFLvotes/chamada && zzzFLvotes+libFLvotes<repFLvotes/chamada){
                    vetorEstado[34].style.fill = repcolorforte;
                    evRinFL = evFL
                    evDinFL = 0
                }
            }else{
                vetorEstado[34].style.fill = libcolor;
            }
    
            window.document.getElementById('td_demFLvotes').innerText = demFLvotes.toLocaleString('en-us');
            window.document.getElementById('td_repFLvotes').innerText = repFLvotes.toLocaleString('en-us');
            window.document.getElementById('td_libFLvotes').innerText = libFLvotes.toLocaleString('en-us');
            window.document.getElementById('td_demFLpercent').innerText = (100*demFLvotes/FLvotes).toFixed(2)+"%";
            window.document.getElementById('td_repFLpercent').innerText = (100*repFLvotes/FLvotes).toFixed(2)+"%";
            window.document.getElementById('td_libFLpercent').innerText = (100*libFLvotes/FLvotes).toFixed(2)+"%";
    
            FLpercentin += 1
            window.document.getElementById('td_FLpercentin').innerText = FLpercentin.toFixed(0)+"%";
    
            if(FLpercentin==100){
                clearInterval(votaFL)
            }
    
        },percentintempo)
    },21*percentintempo)

    setTimeout(function(){
        contest = evVA
        var VApercentin = 0
    
        var votaVA = setInterval(function(){
    
            var NOVOdem = parseInt(pop.VA*gauss(demmean.VA,desvio)/particao)
            var NOVOrep = parseInt(pop.VA*gauss(repmean.VA,desvio)/particao)
            var NOVOlib = parseInt(pop.VA*gauss(libmean.VA,desvio)/particao)
    
            demVAvotes += NOVOdem
            repVAvotes += NOVOrep
            libVAvotes += NOVOlib
    
            VAvotes = demVAvotes+repVAvotes+libVAvotes
            zzzVAvotes = pop.VA-VAvotes
    
            demUSvotes += NOVOdem
            repUSvotes += NOVOrep
            libUSvotes += NOVOlib
    
            if(demVAvotes>repVAvotes && demVAvotes>libVAvotes){
                vetorEstado[19].style.fill = demcolor;
                if(zzzVAvotes+repVAvotes<demVAvotes/chamada && zzzVAvotes+libVAvotes<demVAvotes/chamada){
                    vetorEstado[19].style.fill = demcolorforte;
                    evDinVA = evVA
                }
            }else if(repVAvotes>demVAvotes && repVAvotes>libVAvotes){
                vetorEstado[19].style.fill = repcolor;
                if(zzzVAvotes+demVAvotes<repVAvotes/chamada && zzzVAvotes+libVAvotes<repVAvotes/chamada){
                    vetorEstado[19].style.fill = repcolorforte;
                    evRinVA = evVA
                }
            }else{
                vetorEstado[19].style.fill = libcolor;
            }
    
            window.document.getElementById('td_demVAvotes').innerText = demVAvotes.toLocaleString('en-us');
            window.document.getElementById('td_repVAvotes').innerText = repVAvotes.toLocaleString('en-us');
            window.document.getElementById('td_libVAvotes').innerText = libVAvotes.toLocaleString('en-us');
            window.document.getElementById('td_demVApercent').innerText = (100*demVAvotes/VAvotes).toFixed(2)+"%";
            window.document.getElementById('td_repVApercent').innerText = (100*repVAvotes/VAvotes).toFixed(2)+"%";
            window.document.getElementById('td_libVApercent').innerText = (100*libVAvotes/VAvotes).toFixed(2)+"%";
    
            VApercentin += 1
            window.document.getElementById('td_VApercentin').innerText = VApercentin.toFixed(0)+"%";
    
            if(VApercentin==100){
                clearInterval(votaVA)
            }
    
        },percentintempo)
    },6*percentintempo)

    setTimeout(function(){
        contest = evWV
        var WVpercentin = 0
    
        var votaWV = setInterval(function(){
    
            var NOVOdem = parseInt(pop.WV*gauss(demmean.WV,desvio)/particao)
            var NOVOrep = parseInt(pop.WV*gauss(repmean.WV,desvio)/particao)
            var NOVOlib = parseInt(pop.WV*gauss(libmean.WV,desvio)/particao)
    
            demWVvotes += NOVOdem
            repWVvotes += NOVOrep
            libWVvotes += NOVOlib
    
            WVvotes = demWVvotes+repWVvotes+libWVvotes
            zzzWVvotes = pop.WV-WVvotes
    
            demUSvotes += NOVOdem
            repUSvotes += NOVOrep
            libUSvotes += NOVOlib
    
            if(demWVvotes>repWVvotes && demWVvotes>libWVvotes){
                vetorEstado[12].style.fill = demcolor;
                if(zzzWVvotes+repWVvotes<demWVvotes/chamada && zzzWVvotes+libWVvotes<demWVvotes/chamada){
                    vetorEstado[12].style.fill = demcolorforte;
                    evDinWV = evWV
                }
            }else if(repWVvotes>demWVvotes && repWVvotes>libWVvotes){
                vetorEstado[12].style.fill = repcolor;
                if(zzzWVvotes+demWVvotes<repWVvotes/chamada && zzzWVvotes+libWVvotes<repWVvotes/chamada){
                    vetorEstado[12].style.fill = repcolorforte;
                    evRinWV = evWV
                }
            }else{
                vetorEstado[12].style.fill = libcolor;
            }
    
            window.document.getElementById('td_demWVvotes').innerText = demWVvotes.toLocaleString('en-us');
            window.document.getElementById('td_repWVvotes').innerText = repWVvotes.toLocaleString('en-us');
            window.document.getElementById('td_libWVvotes').innerText = libWVvotes.toLocaleString('en-us');
            window.document.getElementById('td_demWVpercent').innerText = (100*demWVvotes/WVvotes).toFixed(2)+"%";
            window.document.getElementById('td_repWVpercent').innerText = (100*repWVvotes/WVvotes).toFixed(2)+"%";
            window.document.getElementById('td_libWVpercent').innerText = (100*libWVvotes/WVvotes).toFixed(2)+"%";
    
            WVpercentin += 1
            window.document.getElementById('td_WVpercentin').innerText = WVpercentin.toFixed(0)+"%";
    
            if(WVpercentin==100){
                clearInterval(votaWV)
            }
    
        },percentintempo)
    },12*percentintempo)

    setTimeout(function(){
        contest = evAL
        var ALpercentin = 0
    
        var votaAL = setInterval(function(){
    
            var NOVOdem = parseInt(pop.AL*gauss(demmean.AL,desvio)/particao)
            var NOVOrep = parseInt(pop.AL*gauss(repmean.AL,desvio)/particao)
            var NOVOlib = parseInt(pop.AL*gauss(libmean.AL,desvio)/particao)
    
            demALvotes += NOVOdem
            repALvotes += NOVOrep
            libALvotes += NOVOlib
    
            ALvotes = demALvotes+repALvotes+libALvotes
            zzzALvotes = pop.AL-ALvotes
    
            demUSvotes += NOVOdem
            repUSvotes += NOVOrep
            libUSvotes += NOVOlib
    
            if(demALvotes>repALvotes && demALvotes>libALvotes){
                vetorEstado[10].style.fill = demcolor;
                if(zzzALvotes+repALvotes<demALvotes/chamada && zzzALvotes+libALvotes<demALvotes/chamada){
                    vetorEstado[10].style.fill = demcolorforte;
                    evDinAL = evAL
                }
            }else if(repALvotes>demALvotes && repALvotes>libALvotes){
                vetorEstado[10].style.fill = repcolor;
                if(zzzALvotes+demALvotes<repALvotes/chamada && zzzALvotes+libALvotes<repALvotes/chamada){
                    vetorEstado[10].style.fill = repcolorforte;
                    evRinAL = evAL
                }
            }else{
                vetorEstado[10].style.fill = libcolor;
            }
    
            window.document.getElementById('td_demALvotes').innerText = demALvotes.toLocaleString('en-us');
            window.document.getElementById('td_repALvotes').innerText = repALvotes.toLocaleString('en-us');
            window.document.getElementById('td_libALvotes').innerText = libALvotes.toLocaleString('en-us');
            window.document.getElementById('td_demALpercent').innerText = (100*demALvotes/ALvotes).toFixed(2)+"%";
            window.document.getElementById('td_repALpercent').innerText = (100*repALvotes/ALvotes).toFixed(2)+"%";
            window.document.getElementById('td_libALpercent').innerText = (100*libALvotes/ALvotes).toFixed(2)+"%";
    
            ALpercentin += 1
            window.document.getElementById('td_ALpercentin').innerText = ALpercentin.toFixed(0)+"%";
    
            if(ALpercentin==100){
                clearInterval(votaAL)
            }
    
        },percentintempo)
    },21*percentintempo)

    setTimeout(function(){
        contest = evMS
        var MSpercentin = 0
    
        var votaMS = setInterval(function(){
    
            var NOVOdem = parseInt(pop.MS*gauss(demmean.MS,desvio)/particao)
            var NOVOrep = parseInt(pop.MS*gauss(repmean.MS,desvio)/particao)
            var NOVOlib = parseInt(pop.MS*gauss(libmean.MS,desvio)/particao)
    
            demMSvotes += NOVOdem
            repMSvotes += NOVOrep
            libMSvotes += NOVOlib
    
            MSvotes = demMSvotes+repMSvotes+libMSvotes
            zzzMSvotes = pop.MS-MSvotes
    
            demUSvotes += NOVOdem
            repUSvotes += NOVOrep
            libUSvotes += NOVOlib
    
            if(demMSvotes>repMSvotes && demMSvotes>libMSvotes){
                vetorEstado[22].style.fill = demcolor;
                if(zzzMSvotes+repMSvotes<demMSvotes/chamada && zzzMSvotes+libMSvotes<demMSvotes/chamada){
                    vetorEstado[22].style.fill = demcolorforte;
                    evDinMS = evMS
                }
            }else if(repMSvotes>demMSvotes && repMSvotes>libMSvotes){
                vetorEstado[22].style.fill = repcolor;
                if(zzzMSvotes+demMSvotes<repMSvotes/chamada && zzzMSvotes+libMSvotes<repMSvotes/chamada){
                    vetorEstado[22].style.fill = repcolorforte;
                    evRinMS = evMS
                }
            }else{
                vetorEstado[22].style.fill = libcolor;
            }
    
            window.document.getElementById('td_demMSvotes').innerText = demMSvotes.toLocaleString('en-us');
            window.document.getElementById('td_repMSvotes').innerText = repMSvotes.toLocaleString('en-us');
            window.document.getElementById('td_libMSvotes').innerText = libMSvotes.toLocaleString('en-us');
            window.document.getElementById('td_demMSpercent').innerText = (100*demMSvotes/MSvotes).toFixed(2)+"%";
            window.document.getElementById('td_repMSpercent').innerText = (100*repMSvotes/MSvotes).toFixed(2)+"%";
            window.document.getElementById('td_libMSpercent').innerText = (100*libMSvotes/MSvotes).toFixed(2)+"%";
    
            MSpercentin += 1
            window.document.getElementById('td_MSpercentin').innerText = MSpercentin.toFixed(0)+"%";
    
            if(MSpercentin==100){
                clearInterval(votaMS)
            }
    
        },percentintempo)
    },21*percentintempo)

    setTimeout(function(){
        contest = evLA
        var LApercentin = 0
    
        var votaLA = setInterval(function(){
    
            var NOVOdem = parseInt(pop.LA*gauss(demmean.LA,desvio)/particao)
            var NOVOrep = parseInt(pop.LA*gauss(repmean.LA,desvio)/particao)
            var NOVOlib = parseInt(pop.LA*gauss(libmean.LA,desvio)/particao)
    
            demLAvotes += NOVOdem
            repLAvotes += NOVOrep
            libLAvotes += NOVOlib
    
            LAvotes = demLAvotes+repLAvotes+libLAvotes
            zzzLAvotes = pop.LA-LAvotes
    
            demUSvotes += NOVOdem
            repUSvotes += NOVOrep
            libUSvotes += NOVOlib
    
            if(demLAvotes>repLAvotes && demLAvotes>libLAvotes){
                vetorEstado[28].style.fill = demcolor;
                if(zzzLAvotes+repLAvotes<demLAvotes/chamada && zzzLAvotes+libLAvotes<demLAvotes/chamada){
                    vetorEstado[28].style.fill = demcolorforte;
                    evDinLA = evLA
                }
            }else if(repLAvotes>demLAvotes && repLAvotes>libLAvotes){
                vetorEstado[28].style.fill = repcolor;
                if(zzzLAvotes+demLAvotes<repLAvotes/chamada && zzzLAvotes+libLAvotes<repLAvotes/chamada){
                    vetorEstado[28].style.fill = repcolorforte;
                    evRinLA = evLA
                }
            }else{
                vetorEstado[28].style.fill = libcolor;
            }
    
            window.document.getElementById('td_demLAvotes').innerText = demLAvotes.toLocaleString('en-us');
            window.document.getElementById('td_repLAvotes').innerText = repLAvotes.toLocaleString('en-us');
            window.document.getElementById('td_libLAvotes').innerText = libLAvotes.toLocaleString('en-us');
            window.document.getElementById('td_demLApercent').innerText = (100*demLAvotes/LAvotes).toFixed(2)+"%";
            window.document.getElementById('td_repLApercent').innerText = (100*repLAvotes/LAvotes).toFixed(2)+"%";
            window.document.getElementById('td_libLApercent').innerText = (100*libLAvotes/LAvotes).toFixed(2)+"%";
    
            LApercentin += 1
            window.document.getElementById('td_LApercentin').innerText = LApercentin.toFixed(0)+"%";
    
            if(LApercentin==100){
                clearInterval(votaLA)
            }
    
        },percentintempo)
    },27*percentintempo)

    setTimeout(function(){
        contest = evTN
        var TNpercentin = 0
    
        var votaTN = setInterval(function(){
    
            var NOVOdem = parseInt(pop.TN*gauss(demmean.TN,desvio)/particao)
            var NOVOrep = parseInt(pop.TN*gauss(repmean.TN,desvio)/particao)
            var NOVOlib = parseInt(pop.TN*gauss(libmean.TN,desvio)/particao)
    
            demTNvotes += NOVOdem
            repTNvotes += NOVOrep
            libTNvotes += NOVOlib
    
            TNvotes = demTNvotes+repTNvotes+libTNvotes
            zzzTNvotes = pop.TN-TNvotes
    
            demUSvotes += NOVOdem
            repUSvotes += NOVOrep
            libUSvotes += NOVOlib
    
            if(demTNvotes>repTNvotes && demTNvotes>libTNvotes){
                vetorEstado[5].style.fill = demcolor;
                if(zzzTNvotes+repTNvotes<demTNvotes/chamada && zzzTNvotes+libTNvotes<demTNvotes/chamada){
                    vetorEstado[5].style.fill = demcolorforte;
                    evDinTN = evTN
                }
            }else if(repTNvotes>demTNvotes && repTNvotes>libTNvotes){
                vetorEstado[5].style.fill = repcolor;
                if(zzzTNvotes+demTNvotes<repTNvotes/chamada && zzzTNvotes+libTNvotes<repTNvotes/chamada){
                    vetorEstado[5].style.fill = repcolorforte;
                    evRinTN = evTN
                }
            }else{
                vetorEstado[5].style.fill = libcolor;
            }
    
            window.document.getElementById('td_demTNvotes').innerText = demTNvotes.toLocaleString('en-us');
            window.document.getElementById('td_repTNvotes').innerText = repTNvotes.toLocaleString('en-us');
            window.document.getElementById('td_libTNvotes').innerText = libTNvotes.toLocaleString('en-us');
            window.document.getElementById('td_demTNpercent').innerText = (100*demTNvotes/TNvotes).toFixed(2)+"%";
            window.document.getElementById('td_repTNpercent').innerText = (100*repTNvotes/TNvotes).toFixed(2)+"%";
            window.document.getElementById('td_libTNpercent').innerText = (100*libTNvotes/TNvotes).toFixed(2)+"%";
    
            TNpercentin += 1
            window.document.getElementById('td_TNpercentin').innerText = TNpercentin.toFixed(0)+"%";
    
            if(TNpercentin==100){
                clearInterval(votaTN)
            }
    
        },percentintempo)
    },15*percentintempo)

    setTimeout(function(){
        contest = evKY
        var KYpercentin = 0
    
        var votaKY = setInterval(function(){
    
            var NOVOdem = parseInt(pop.KY*gauss(demmean.KY,desvio)/particao)
            var NOVOrep = parseInt(pop.KY*gauss(repmean.KY,desvio)/particao)
            var NOVOlib = parseInt(pop.KY*gauss(libmean.KY,desvio)/particao)
    
            demKYvotes += NOVOdem
            repKYvotes += NOVOrep
            libKYvotes += NOVOlib
    
            KYvotes = demKYvotes+repKYvotes+libKYvotes
            zzzKYvotes = pop.KY-KYvotes
    
            demUSvotes += NOVOdem
            repUSvotes += NOVOrep
            libUSvotes += NOVOlib
    
            if(demKYvotes>repKYvotes && demKYvotes>libKYvotes){
                vetorEstado[9].style.fill = demcolor;
                if(zzzKYvotes+repKYvotes<demKYvotes/chamada && zzzKYvotes+libKYvotes<demKYvotes/chamada){
                    vetorEstado[9].style.fill = demcolorforte;
                    evDinKY = evKY
                }
            }else if(repKYvotes>demKYvotes && repKYvotes>libKYvotes){
                vetorEstado[9].style.fill = repcolor;
                if(zzzKYvotes+demKYvotes<repKYvotes/chamada && zzzKYvotes+libKYvotes<repKYvotes/chamada){
                    vetorEstado[9].style.fill = repcolorforte;
                    evRinKY = evKY
                }
            }else{
                vetorEstado[9].style.fill = libcolor;
            }
    
            window.document.getElementById('td_demKYvotes').innerText = demKYvotes.toLocaleString('en-us');
            window.document.getElementById('td_repKYvotes').innerText = repKYvotes.toLocaleString('en-us');
            window.document.getElementById('td_libKYvotes').innerText = libKYvotes.toLocaleString('en-us');
            window.document.getElementById('td_demKYpercent').innerText = (100*demKYvotes/KYvotes).toFixed(2)+"%";
            window.document.getElementById('td_repKYpercent').innerText = (100*repKYvotes/KYvotes).toFixed(2)+"%";
            window.document.getElementById('td_libKYpercent').innerText = (100*libKYvotes/KYvotes).toFixed(2)+"%";
    
            KYpercentin += 1
            window.document.getElementById('td_KYpercentin').innerText = KYpercentin.toFixed(0)+"%";
    
            if(KYpercentin==100){
                clearInterval(votaKY)
            }
    
        },percentintempo)
    },23*percentintempo)

    setTimeout(function(){
        contest = evOH
        var OHpercentin = 0
    
        var votaOH = setInterval(function(){
    
            var NOVOdem = parseInt(pop.OH*gauss(demmean.OH,desvio)/particao)
            var NOVOrep = parseInt(pop.OH*gauss(repmean.OH,desvio)/particao)
            var NOVOlib = parseInt(pop.OH*gauss(libmean.OH,desvio)/particao)
    
            demOHvotes += NOVOdem
            repOHvotes += NOVOrep
            libOHvotes += NOVOlib
    
            OHvotes = demOHvotes+repOHvotes+libOHvotes
            zzzOHvotes = pop.OH-OHvotes
    
            demUSvotes += NOVOdem
            repUSvotes += NOVOrep
            libUSvotes += NOVOlib
    
            if(demOHvotes>repOHvotes && demOHvotes>libOHvotes){
                vetorEstado[25].style.fill = demcolor;
                if(zzzOHvotes+repOHvotes<demOHvotes/chamada && zzzOHvotes+libOHvotes<demOHvotes/chamada){
                    vetorEstado[25].style.fill = demcolorforte;
                    evDinOH = evOH
                }
            }else if(repOHvotes>demOHvotes && repOHvotes>libOHvotes){
                vetorEstado[25].style.fill = repcolor;
                if(zzzOHvotes+demOHvotes<repOHvotes/chamada && zzzOHvotes+libOHvotes<repOHvotes/chamada){
                    vetorEstado[25].style.fill = repcolorforte;
                    evRinOH = evOH
                }
            }else{
                vetorEstado[25].style.fill = libcolor;
            }
    
            window.document.getElementById('td_demOHvotes').innerText = demOHvotes.toLocaleString('en-us');
            window.document.getElementById('td_repOHvotes').innerText = repOHvotes.toLocaleString('en-us');
            window.document.getElementById('td_libOHvotes').innerText = libOHvotes.toLocaleString('en-us');
            window.document.getElementById('td_demOHpercent').innerText = (100*demOHvotes/OHvotes).toFixed(2)+"%";
            window.document.getElementById('td_repOHpercent').innerText = (100*repOHvotes/OHvotes).toFixed(2)+"%";
            window.document.getElementById('td_libOHpercent').innerText = (100*libOHvotes/OHvotes).toFixed(2)+"%";
    
            OHpercentin += 1
            window.document.getElementById('td_OHpercentin').innerText = OHpercentin.toFixed(0)+"%";
    
            if(OHpercentin==100){
                clearInterval(votaOH)
            }
    
        },percentintempo)
    },14*percentintempo)

    setTimeout(function(){
        contest = evIN
        var INpercentin = 0
    
        var votaIN = setInterval(function(){
    
            var NOVOdem = parseInt(pop.IN*gauss(demmean.IN,desvio)/particao)
            var NOVOrep = parseInt(pop.IN*gauss(repmean.IN,desvio)/particao)
            var NOVOlib = parseInt(pop.IN*gauss(libmean.IN,desvio)/particao)
    
            demINvotes += NOVOdem
            repINvotes += NOVOrep
            libINvotes += NOVOlib
    
            INvotes = demINvotes+repINvotes+libINvotes
            zzzINvotes = pop.IN-INvotes
    
            demUSvotes += NOVOdem
            repUSvotes += NOVOrep
            libUSvotes += NOVOlib
    
            if(demINvotes>repINvotes && demINvotes>libINvotes){
                vetorEstado[20].style.fill = demcolor;
                if(zzzINvotes+repINvotes<demINvotes/chamada && zzzINvotes+libINvotes<demINvotes/chamada){
                    vetorEstado[20].style.fill = demcolorforte;
                    evDinIN = evIN
                }
            }else if(repINvotes>demINvotes && repINvotes>libINvotes){
                vetorEstado[20].style.fill = repcolor;
                if(zzzINvotes+demINvotes<repINvotes/chamada && zzzINvotes+libINvotes<repINvotes/chamada){
                    vetorEstado[20].style.fill = repcolorforte;
                    evRinIN = evIN
                }
            }else{
                vetorEstado[20].style.fill = libcolor;
            }
    
            window.document.getElementById('td_demINvotes').innerText = demINvotes.toLocaleString('en-us');
            window.document.getElementById('td_repINvotes').innerText = repINvotes.toLocaleString('en-us');
            window.document.getElementById('td_libINvotes').innerText = libINvotes.toLocaleString('en-us');
            window.document.getElementById('td_demINpercent').innerText = (100*demINvotes/INvotes).toFixed(2)+"%";
            window.document.getElementById('td_repINpercent').innerText = (100*repINvotes/INvotes).toFixed(2)+"%";
            window.document.getElementById('td_libINpercent').innerText = (100*libINvotes/INvotes).toFixed(2)+"%";
    
            INpercentin += 1
            window.document.getElementById('td_INpercentin').innerText = INpercentin.toFixed(0)+"%";
    
            if(INpercentin==100){
                clearInterval(votaIN)
            }
    
        },percentintempo)
    },21*percentintempo)

    setTimeout(function(){
        contest = evMI
        var MIpercentin = 0
    
        var votaMI = setInterval(function(){
    
            var NOVOdem = parseInt(pop.MI*gauss(demmean.MI,desvio)/particao)
            var NOVOrep = parseInt(pop.MI*gauss(repmean.MI,desvio)/particao)
            var NOVOlib = parseInt(pop.MI*gauss(libmean.MI,desvio)/particao)
    
            demMIvotes += NOVOdem
            repMIvotes += NOVOrep
            libMIvotes += NOVOlib
    
            MIvotes = demMIvotes+repMIvotes+libMIvotes
            zzzMIvotes = pop.MI-MIvotes
    
            demUSvotes += NOVOdem
            repUSvotes += NOVOrep
            libUSvotes += NOVOlib
    
            if(demMIvotes>repMIvotes && demMIvotes>libMIvotes){
                vetorEstado[36].style.fill = demcolor;
                if(zzzMIvotes+repMIvotes<demMIvotes/chamada && zzzMIvotes+libMIvotes<demMIvotes/chamada){
                    vetorEstado[36].style.fill = demcolorforte;
                    evDinMI = evMI
                    evRinMI = 0
                }
            }else if(repMIvotes>demMIvotes && repMIvotes>libMIvotes){
                vetorEstado[36].style.fill = repcolor;
                if(zzzMIvotes+demMIvotes<repMIvotes/chamada && zzzMIvotes+libMIvotes<repMIvotes/chamada){
                    vetorEstado[36].style.fill = repcolorforte;
                    evRinMI = evMI
                    evDinMI = 0
                }
            }else{
                vetorEstado[36].style.fill = libcolor;
            }
    
            window.document.getElementById('td_demMIvotes').innerText = demMIvotes.toLocaleString('en-us');
            window.document.getElementById('td_repMIvotes').innerText = repMIvotes.toLocaleString('en-us');
            window.document.getElementById('td_libMIvotes').innerText = libMIvotes.toLocaleString('en-us');
            window.document.getElementById('td_demMIpercent').innerText = (100*demMIvotes/MIvotes).toFixed(2)+"%";
            window.document.getElementById('td_repMIpercent').innerText = (100*repMIvotes/MIvotes).toFixed(2)+"%";
            window.document.getElementById('td_libMIpercent').innerText = (100*libMIvotes/MIvotes).toFixed(2)+"%";
    
            MIpercentin += 1
            window.document.getElementById('td_MIpercentin').innerText = MIpercentin.toFixed(0)+"%";
    
            if(MIpercentin==100){
                clearInterval(votaMI)
                if(demMIvotes>repMIvotes){
                    vetorEstado[36].style.fill = demcolorforte;
                    evDinMI = evMI
                    evRinMI = 0
                }else if(repMIvotes>demMIvotes){
                    vetorEstado[36].style.fill = repcolorforte;
                    evRinMI = evMI
                    evDinMI = 0
                }
            }
    
        },percentintempo)
    },21*percentintempo)

    setTimeout(function(){
        contest = evIL
        var ILpercentin = 0
    
        var votaIL = setInterval(function(){
    
            var NOVOdem = parseInt(pop.IL*gauss(demmean.IL,desvio)/particao)
            var NOVOrep = parseInt(pop.IL*gauss(repmean.IL,desvio)/particao)
            var NOVOlib = parseInt(pop.IL*gauss(libmean.IL,desvio)/particao)
    
            demILvotes += NOVOdem
            repILvotes += NOVOrep
            libILvotes += NOVOlib
    
            ILvotes = demILvotes+repILvotes+libILvotes
            zzzILvotes = pop.IL-ILvotes
    
            demUSvotes += NOVOdem
            repUSvotes += NOVOrep
            libUSvotes += NOVOlib
    
            if(demILvotes>repILvotes && demILvotes>libILvotes){
                vetorEstado[27].style.fill = demcolor;
                if(zzzILvotes+repILvotes<demILvotes/chamada && zzzILvotes+libILvotes<demILvotes/chamada){
                    vetorEstado[27].style.fill = demcolorforte;
                    evDinIL = evIL
                }
            }else if(repILvotes>demILvotes && repILvotes>libILvotes){
                vetorEstado[27].style.fill = repcolor;
                if(zzzILvotes+demILvotes<repILvotes/chamada && zzzILvotes+libILvotes<repILvotes/chamada){
                    vetorEstado[27].style.fill = repcolorforte;
                    evRinIL = evIL
                }
            }else{
                vetorEstado[27].style.fill = libcolor;
            }
    
            window.document.getElementById('td_demILvotes').innerText = demILvotes.toLocaleString('en-us');
            window.document.getElementById('td_repILvotes').innerText = repILvotes.toLocaleString('en-us');
            window.document.getElementById('td_libILvotes').innerText = libILvotes.toLocaleString('en-us');
            window.document.getElementById('td_demILpercent').innerText = (100*demILvotes/ILvotes).toFixed(2)+"%";
            window.document.getElementById('td_repILpercent').innerText = (100*repILvotes/ILvotes).toFixed(2)+"%";
            window.document.getElementById('td_libILpercent').innerText = (100*libILvotes/ILvotes).toFixed(2)+"%";
    
            ILpercentin += 1
            window.document.getElementById('td_ILpercentin').innerText = ILpercentin.toFixed(0)+"%";
    
            if(ILpercentin==100){
                clearInterval(votaIL)
            }
    
        },percentintempo)
    },23*percentintempo)

    setTimeout(function(){
        contest = evWI
        var WIpercentin = 0
    
        var votaWI = setInterval(function(){
    
            var NOVOdem = parseInt(pop.WI*gauss(demmean.WI,desvio)/particao)
            var NOVOrep = parseInt(pop.WI*gauss(repmean.WI,desvio)/particao)
            var NOVOlib = parseInt(pop.WI*gauss(libmean.WI,desvio)/particao)
    
            demWIvotes += NOVOdem
            repWIvotes += NOVOrep
            libWIvotes += NOVOlib
    
            WIvotes = demWIvotes+repWIvotes+libWIvotes
            zzzWIvotes = pop.WI-WIvotes
    
            demUSvotes += NOVOdem
            repUSvotes += NOVOrep
            libUSvotes += NOVOlib
    
            if(demWIvotes>repWIvotes && demWIvotes>libWIvotes){
                vetorEstado[38].style.fill = demcolor;
                if(zzzWIvotes+repWIvotes<demWIvotes/chamada && zzzWIvotes+libWIvotes<demWIvotes/chamada){
                    vetorEstado[38].style.fill = demcolorforte;
                    evDinWI = evWI
                    evRinWI = 0
                }
            }else if(repWIvotes>demWIvotes && repWIvotes>libWIvotes){
                vetorEstado[38].style.fill = repcolor;
                if(zzzWIvotes+demWIvotes<repWIvotes/chamada && zzzWIvotes+libWIvotes<repWIvotes/chamada){
                    vetorEstado[38].style.fill = repcolorforte;
                    evRinWI = evWI
                    evDinWI = 0
                }
            }else{
                vetorEstado[38].style.fill = libcolor;
            }
    
            window.document.getElementById('td_demWIvotes').innerText = demWIvotes.toLocaleString('en-us');
            window.document.getElementById('td_repWIvotes').innerText = repWIvotes.toLocaleString('en-us');
            window.document.getElementById('td_libWIvotes').innerText = libWIvotes.toLocaleString('en-us');
            window.document.getElementById('td_demWIpercent').innerText = (100*demWIvotes/WIvotes).toFixed(2)+"%";
            window.document.getElementById('td_repWIpercent').innerText = (100*repWIvotes/WIvotes).toFixed(2)+"%";
            window.document.getElementById('td_libWIpercent').innerText = (100*libWIvotes/WIvotes).toFixed(2)+"%";
    
            WIpercentin += 1
            window.document.getElementById('td_WIpercentin').innerText = WIpercentin.toFixed(0)+"%";
    
            if(WIpercentin==100){
                clearInterval(votaWI)
                if(demWIvotes>repWIvotes){
                    vetorEstado[38].style.fill = demcolorforte;
                    evDinWI = evWI
                }else if(repWIvotes>demWIvotes){
                    vetorEstado[38].style.fill = repcolorforte;
                    evRinWI = evWI
                }
            }
    
        },percentintempo)
    },23*percentintempo)

    setTimeout(function(){
        contest = evAR
        var ARpercentin = 0
    
        var votaAR = setInterval(function(){
    
            var NOVOdem = parseInt(pop.AR*gauss(demmean.AR,desvio)/particao)
            var NOVOrep = parseInt(pop.AR*gauss(repmean.AR,desvio)/particao)
            var NOVOlib = parseInt(pop.AR*gauss(libmean.AR,desvio)/particao)
    
            demARvotes += NOVOdem
            repARvotes += NOVOrep
            libARvotes += NOVOlib
    
            ARvotes = demARvotes+repARvotes+libARvotes
            zzzARvotes = pop.AR-ARvotes
    
            demUSvotes += NOVOdem
            repUSvotes += NOVOrep
            libUSvotes += NOVOlib
    
            if(demARvotes>repARvotes && demARvotes>libARvotes){
                vetorEstado[14].style.fill = demcolor;
                if(zzzARvotes+repARvotes<demARvotes/chamada && zzzARvotes+libARvotes<demARvotes/chamada){
                    vetorEstado[14].style.fill = demcolorforte;
                    evDinAR = evAR
                }
            }else if(repARvotes>demARvotes && repARvotes>libARvotes){
                vetorEstado[14].style.fill = repcolor;
                if(zzzARvotes+demARvotes<repARvotes/chamada && zzzARvotes+libARvotes<repARvotes/chamada){
                    vetorEstado[14].style.fill = repcolorforte;
                    evRinAR = evAR
                }
            }else{
                vetorEstado[14].style.fill = libcolor;
            }
    
            window.document.getElementById('td_demARvotes').innerText = demARvotes.toLocaleString('en-us');
            window.document.getElementById('td_repARvotes').innerText = repARvotes.toLocaleString('en-us');
            window.document.getElementById('td_libARvotes').innerText = libARvotes.toLocaleString('en-us');
            window.document.getElementById('td_demARpercent').innerText = (100*demARvotes/ARvotes).toFixed(2)+"%";
            window.document.getElementById('td_repARpercent').innerText = (100*repARvotes/ARvotes).toFixed(2)+"%";
            window.document.getElementById('td_libARpercent').innerText = (100*libARvotes/ARvotes).toFixed(2)+"%";
    
            ARpercentin += 1
            window.document.getElementById('td_ARpercentin').innerText = ARpercentin.toFixed(0)+"%";
    
            if(ARpercentin==100){
                clearInterval(votaAR)
            }
    
        },percentintempo)
    },23*percentintempo)

    setTimeout(function(){
        contest = evMO
        var MOpercentin = 0
    
        var votaMO = setInterval(function(){
    
            var NOVOdem = parseInt(pop.MO*gauss(demmean.MO,desvio)/particao)
            var NOVOrep = parseInt(pop.MO*gauss(repmean.MO,desvio)/particao)
            var NOVOlib = parseInt(pop.MO*gauss(libmean.MO,desvio)/particao)
    
            demMOvotes += NOVOdem
            repMOvotes += NOVOrep
            libMOvotes += NOVOlib
    
            MOvotes = demMOvotes+repMOvotes+libMOvotes
            zzzMOvotes = pop.MO-MOvotes
    
            demUSvotes += NOVOdem
            repUSvotes += NOVOrep
            libUSvotes += NOVOlib
    
            if(demMOvotes>repMOvotes && demMOvotes>libMOvotes){
                vetorEstado[24].style.fill = demcolor;
                if(zzzMOvotes+repMOvotes<demMOvotes/chamada && zzzMOvotes+libMOvotes<demMOvotes/chamada){
                    vetorEstado[24].style.fill = demcolorforte;
                    evDinMO = evMO
                }
            }else if(repMOvotes>demMOvotes && repMOvotes>libMOvotes){
                vetorEstado[24].style.fill = repcolor;
                if(zzzMOvotes+demMOvotes<repMOvotes/chamada && zzzMOvotes+libMOvotes<repMOvotes/chamada){
                    vetorEstado[24].style.fill = repcolorforte;
                    evRinMO = evMO
                }
            }else{
                vetorEstado[24].style.fill = libcolor;
            }
    
            window.document.getElementById('td_demMOvotes').innerText = demMOvotes.toLocaleString('en-us');
            window.document.getElementById('td_repMOvotes').innerText = repMOvotes.toLocaleString('en-us');
            window.document.getElementById('td_libMOvotes').innerText = libMOvotes.toLocaleString('en-us');
            window.document.getElementById('td_demMOpercent').innerText = (100*demMOvotes/MOvotes).toFixed(2)+"%";
            window.document.getElementById('td_repMOpercent').innerText = (100*repMOvotes/MOvotes).toFixed(2)+"%";
            window.document.getElementById('td_libMOpercent').innerText = (100*libMOvotes/MOvotes).toFixed(2)+"%";
    
            MOpercentin += 1
            window.document.getElementById('td_MOpercentin').innerText = MOpercentin.toFixed(0)+"%";
    
            if(MOpercentin==100){
                clearInterval(votaMO)
            }
    
        },percentintempo)
    },22*percentintempo)

    setTimeout(function(){
        contest = evIA
        var IApercentin = 0
    
        var votaIA = setInterval(function(){
    
            var NOVOdem = parseInt(pop.IA*gauss(demmean.IA,desvio)/particao)
            var NOVOrep = parseInt(pop.IA*gauss(repmean.IA,desvio)/particao)
            var NOVOlib = parseInt(pop.IA*gauss(libmean.IA,desvio)/particao)
    
            demIAvotes += NOVOdem
            repIAvotes += NOVOrep
            libIAvotes += NOVOlib
    
            IAvotes = demIAvotes+repIAvotes+libIAvotes
            zzzIAvotes = pop.IA-IAvotes
    
            demUSvotes += NOVOdem
            repUSvotes += NOVOrep
            libUSvotes += NOVOlib
    
            if(demIAvotes>repIAvotes && demIAvotes>libIAvotes){
                vetorEstado[32].style.fill = demcolor;
                if(zzzIAvotes+repIAvotes<demIAvotes/chamada && zzzIAvotes+libIAvotes<demIAvotes/chamada){
                    vetorEstado[32].style.fill = demcolorforte;
                    evDinIA = evIA
                }
            }else if(repIAvotes>demIAvotes && repIAvotes>libIAvotes){
                vetorEstado[32].style.fill = repcolor;
                if(zzzIAvotes+demIAvotes<repIAvotes/chamada && zzzIAvotes+libIAvotes<repIAvotes/chamada){
                    vetorEstado[32].style.fill = repcolorforte;
                    evRinIA = evIA
                }
            }else{
                vetorEstado[32].style.fill = libcolor;
            }
    
            window.document.getElementById('td_demIAvotes').innerText = demIAvotes.toLocaleString('en-us');
            window.document.getElementById('td_repIAvotes').innerText = repIAvotes.toLocaleString('en-us');
            window.document.getElementById('td_libIAvotes').innerText = libIAvotes.toLocaleString('en-us');
            window.document.getElementById('td_demIApercent').innerText = (100*demIAvotes/IAvotes).toFixed(2)+"%";
            window.document.getElementById('td_repIApercent').innerText = (100*repIAvotes/IAvotes).toFixed(2)+"%";
            window.document.getElementById('td_libIApercent').innerText = (100*libIAvotes/IAvotes).toFixed(2)+"%";
    
            IApercentin += 1
            window.document.getElementById('td_IApercentin').innerText = IApercentin.toFixed(0)+"%";
    
            if(IApercentin==100){
                clearInterval(votaIA)
            }
    
        },percentintempo)
    },23*percentintempo)

    setTimeout(function(){
        var MNpercentin = 0
    
        var votaMN = setInterval(function(){
    
            var NOVOdem = parseInt(pop.MN*gauss(demmean.MN,desvio)/particao)
            var NOVOrep = parseInt(pop.MN*gauss(repmean.MN,desvio)/particao)
            var NOVOlib = parseInt(pop.MN*gauss(libmean.MN,desvio)/particao)
    
            demMNvotes += NOVOdem
            repMNvotes += NOVOrep
            libMNvotes += NOVOlib
    
            MNvotes = demMNvotes+repMNvotes+libMNvotes
            zzzMNvotes = pop.MN-MNvotes
    
            demUSvotes += NOVOdem
            repUSvotes += NOVOrep
            libUSvotes += NOVOlib
    
            if(demMNvotes>repMNvotes && demMNvotes>libMNvotes){
                vetorEstado[39].style.fill = demcolor;
                if(zzzMNvotes+repMNvotes<demMNvotes/chamada && zzzMNvotes+libMNvotes<demMNvotes/chamada){
                    vetorEstado[39].style.fill = demcolorforte;
                    evDinMN = evMN
                    evRinMN = 0
                }
            }else if(repMNvotes>demMNvotes && repMNvotes>libMNvotes){
                vetorEstado[39].style.fill = repcolor;
                if(zzzMNvotes+demMNvotes<repMNvotes/chamada && zzzMNvotes+libMNvotes<repMNvotes/chamada){
                    vetorEstado[39].style.fill = repcolorforte;
                    evRinMN = evMN
                    evDinMN = 0
                }
            }else{
                vetorEstado[39].style.fill = libcolor;
            }
    
            window.document.getElementById('td_demMNvotes').innerText = demMNvotes.toLocaleString('en-us');
            window.document.getElementById('td_repMNvotes').innerText = repMNvotes.toLocaleString('en-us');
            window.document.getElementById('td_libMNvotes').innerText = libMNvotes.toLocaleString('en-us');
            window.document.getElementById('td_demMNpercent').innerText = (100*demMNvotes/MNvotes).toFixed(2)+"%";
            window.document.getElementById('td_repMNpercent').innerText = (100*repMNvotes/MNvotes).toFixed(2)+"%";
            window.document.getElementById('td_libMNpercent').innerText = (100*libMNvotes/MNvotes).toFixed(2)+"%";
    
            MNpercentin += 1
            window.document.getElementById('td_MNpercentin').innerText = MNpercentin.toFixed(0)+"%";
    
            if(MNpercentin==100){
                clearInterval(votaMN)
                if(demMNvotes>repMNvotes){
                    vetorEstado[39].style.fill = demcolorforte;
                    evDinMN = evMN
                }else if(repMNvotes>demMNvotes){
                    vetorEstado[39].style.fill = repcolorforte;
                    evRinMN = evMN
                }
            }
    
        },percentintempo)
    },30*percentintempo)

    setTimeout(function(){
        contest = evNM
        var NMpercentin = 0
    
        var votaNM = setInterval(function(){
    
            var NOVOdem = parseInt(pop.NM*gauss(demmean.NM,desvio)/particao)
            var NOVOrep = parseInt(pop.NM*gauss(repmean.NM,desvio)/particao)
            var NOVOlib = parseInt(pop.NM*gauss(libmean.NM,desvio)/particao)
    
            demNMvotes += NOVOdem
            repNMvotes += NOVOrep
            libNMvotes += NOVOlib
    
            NMvotes = demNMvotes+repNMvotes+libNMvotes
            zzzNMvotes = pop.NM-NMvotes
    
            demUSvotes += NOVOdem
            repUSvotes += NOVOrep
            libUSvotes += NOVOlib
    
            if(demNMvotes>repNMvotes && demNMvotes>libNMvotes){
                vetorEstado[40].style.fill = demcolor;
                if(zzzNMvotes+repNMvotes<demNMvotes/chamada && zzzNMvotes+libNMvotes<demNMvotes/chamada){
                    vetorEstado[40].style.fill = demcolorforte;
                    evDinNM = evNM
                }
            }else if(repNMvotes>demNMvotes && repNMvotes>libNMvotes){
                vetorEstado[40].style.fill = repcolor;
                if(zzzNMvotes+demNMvotes<repNMvotes/chamada && zzzNMvotes+libNMvotes<repNMvotes/chamada){
                    vetorEstado[40].style.fill = repcolorforte;
                    evRinNM = evNM
                }
            }else{
                vetorEstado[40].style.fill = libcolor;
            }
    
            window.document.getElementById('td_demNMvotes').innerText = demNMvotes.toLocaleString('en-us');
            window.document.getElementById('td_repNMvotes').innerText = repNMvotes.toLocaleString('en-us');
            window.document.getElementById('td_libNMvotes').innerText = libNMvotes.toLocaleString('en-us');
            window.document.getElementById('td_demNMpercent').innerText = (100*demNMvotes/NMvotes).toFixed(2)+"%";
            window.document.getElementById('td_repNMpercent').innerText = (100*repNMvotes/NMvotes).toFixed(2)+"%";
            window.document.getElementById('td_libNMpercent').innerText = (100*libNMvotes/NMvotes).toFixed(2)+"%";
    
            NMpercentin += 1
            window.document.getElementById('td_NMpercentin').innerText = NMpercentin.toFixed(0)+"%";
    
            if(NMpercentin==100){
                clearInterval(votaNM)
            }
    
        },percentintempo)
    },36*percentintempo)

    setTimeout(function(){
        contest = evAZ
        var AZpercentin = 0
    
        var votaAZ = setInterval(function(){
    
            var NOVOdem = parseInt(pop.AZ*gauss(demmean.AZ,desvio)/particao)
            var NOVOrep = parseInt(pop.AZ*gauss(repmean.AZ,desvio)/particao)
            var NOVOlib = parseInt(pop.AZ*gauss(libmean.AZ,desvio)/particao)
    
            demAZvotes += NOVOdem
            repAZvotes += NOVOrep
            libAZvotes += NOVOlib
    
            AZvotes = demAZvotes+repAZvotes+libAZvotes
            zzzAZvotes = pop.AZ-AZvotes
    
            demUSvotes += NOVOdem
            repUSvotes += NOVOrep
            libUSvotes += NOVOlib
    
            if(demAZvotes>repAZvotes && demAZvotes>libAZvotes){
                vetorEstado[47].style.fill = demcolor;
                if(zzzAZvotes+repAZvotes<demAZvotes/chamada && zzzAZvotes+libAZvotes<demAZvotes/chamada){
                    vetorEstado[47].style.fill = demcolorforte;
                    evDinAZ = evAZ
                }
            }else if(repAZvotes>demAZvotes && repAZvotes>libAZvotes){
                vetorEstado[47].style.fill = repcolor;
                if(zzzAZvotes+demAZvotes<repAZvotes/chamada && zzzAZvotes+libAZvotes<repAZvotes/chamada){
                    vetorEstado[47].style.fill = repcolorforte;
                    evRinAZ = evAZ
                }
            }else{
                vetorEstado[47].style.fill = libcolor;
            }
    
            window.document.getElementById('td_demAZvotes').innerText = demAZvotes.toLocaleString('en-us');
            window.document.getElementById('td_repAZvotes').innerText = repAZvotes.toLocaleString('en-us');
            window.document.getElementById('td_libAZvotes').innerText = libAZvotes.toLocaleString('en-us');
            window.document.getElementById('td_demAZpercent').innerText = (100*demAZvotes/AZvotes).toFixed(2)+"%";
            window.document.getElementById('td_repAZpercent').innerText = (100*repAZvotes/AZvotes).toFixed(2)+"%";
            window.document.getElementById('td_libAZpercent').innerText = (100*libAZvotes/AZvotes).toFixed(2)+"%";
    
            AZpercentin += 1
            window.document.getElementById('td_AZpercentin').innerText = AZpercentin.toFixed(0)+"%";
    
            if(AZpercentin==100){
                clearInterval(votaAZ)
                if(demAZvotes>repAZvotes){
                    vetorEstado[47].style.fill = demcolorforte;
                    evDinAZ = evAZ
                }else if(repAZvotes>demAZvotes){
                    vetorEstado[47].style.fill = repcolorforte;
                    evRinAZ = evAZ
                }
            }
    
        },percentintempo)
    },48*percentintempo)

    setTimeout(function(){
        contest = evNV
        var NVpercentin = 0
    
        var votaNV = setInterval(function(){
    
            var NOVOdem = parseInt(pop.NV*gauss(demmean.NV,desvio)/particao)
            var NOVOrep = parseInt(pop.NV*gauss(repmean.NV,desvio)/particao)
            var NOVOlib = parseInt(pop.NV*gauss(libmean.NV,desvio)/particao)
    
            demNVvotes += NOVOdem
            repNVvotes += NOVOrep
            libNVvotes += NOVOlib
    
            NVvotes = demNVvotes+repNVvotes+libNVvotes
            zzzNVvotes = pop.NV-NVvotes
    
            demUSvotes += NOVOdem
            repUSvotes += NOVOrep
            libUSvotes += NOVOlib
    
            if(demNVvotes>repNVvotes && demNVvotes>libNVvotes){
                vetorEstado[48].style.fill = demcolor;
                if(zzzNVvotes+repNVvotes<demNVvotes/chamada && zzzNVvotes+libNVvotes<demNVvotes/chamada){
                    vetorEstado[48].style.fill = demcolorforte;
                    evDinNV = evNV
                }
            }else if(repNVvotes>demNVvotes && repNVvotes>libNVvotes){
                vetorEstado[48].style.fill = repcolor;
                if(zzzNVvotes+demNVvotes<repNVvotes/chamada && zzzNVvotes+libNVvotes<repNVvotes/chamada){
                    vetorEstado[48].style.fill = repcolorforte;
                    evRinNV = evNV
                }
            }else{
                vetorEstado[48].style.fill = libcolor;
            }
    
            window.document.getElementById('td_demNVvotes').innerText = demNVvotes.toLocaleString('en-us');
            window.document.getElementById('td_repNVvotes').innerText = repNVvotes.toLocaleString('en-us');
            window.document.getElementById('td_libNVvotes').innerText = libNVvotes.toLocaleString('en-us');
            window.document.getElementById('td_demNVpercent').innerText = (100*demNVvotes/NVvotes).toFixed(2)+"%";
            window.document.getElementById('td_repNVpercent').innerText = (100*repNVvotes/NVvotes).toFixed(2)+"%";
            window.document.getElementById('td_libNVpercent').innerText = (100*libNVvotes/NVvotes).toFixed(2)+"%";
    
            NVpercentin += 1
            window.document.getElementById('td_NVpercentin').innerText = NVpercentin.toFixed(0)+"%";
    
            if(NVpercentin==100){
                clearInterval(votaNV)
                if(demNVvotes>repNVvotes){
                    vetorEstado[48].style.fill = demcolorforte;
                    evDinNV = evNV
                }else if(repNVvotes>demNVvotes){
                    vetorEstado[48].style.fill = repcolorforte;
                    evRinNV = evNV
                }
            }
    
        },percentintempo)
    },47*percentintempo)

    setTimeout(function(){
        contest = evOK
        var OKpercentin = 0
    
        var votaOK = setInterval(function(){
    
            var NOVOdem = parseInt(pop.OK*gauss(demmean.OK,desvio)/particao)
            var NOVOrep = parseInt(pop.OK*gauss(repmean.OK,desvio)/particao)
            var NOVOlib = parseInt(pop.OK*gauss(libmean.OK,desvio)/particao)
    
            demOKvotes += NOVOdem
            repOKvotes += NOVOrep
            libOKvotes += NOVOlib
    
            OKvotes = demOKvotes+repOKvotes+libOKvotes
            zzzOKvotes = pop.OK-OKvotes
    
            demUSvotes += NOVOdem
            repUSvotes += NOVOrep
            libUSvotes += NOVOlib
    
            if(demOKvotes>repOKvotes && demOKvotes>libOKvotes){
                vetorEstado[17].style.fill = demcolor;
                if(zzzOKvotes+repOKvotes<demOKvotes/chamada && zzzOKvotes+libOKvotes<demOKvotes/chamada){
                    vetorEstado[17].style.fill = demcolorforte;
                    evDinOK = evOK
                }
            }else if(repOKvotes>demOKvotes && repOKvotes>libOKvotes){
                vetorEstado[17].style.fill = repcolor;
                if(zzzOKvotes+demOKvotes<repOKvotes/chamada && zzzOKvotes+libOKvotes<repOKvotes/chamada){
                    vetorEstado[17].style.fill = repcolorforte;
                    evRinOK = evOK
                }
            }else{
                vetorEstado[17].style.fill = libcolor;
            }
    
            window.document.getElementById('td_demOKvotes').innerText = demOKvotes.toLocaleString('en-us');
            window.document.getElementById('td_repOKvotes').innerText = repOKvotes.toLocaleString('en-us');
            window.document.getElementById('td_libOKvotes').innerText = libOKvotes.toLocaleString('en-us');
            window.document.getElementById('td_demOKpercent').innerText = (100*demOKvotes/OKvotes).toFixed(2)+"%";
            window.document.getElementById('td_repOKpercent').innerText = (100*repOKvotes/OKvotes).toFixed(2)+"%";
            window.document.getElementById('td_libOKpercent').innerText = (100*libOKvotes/OKvotes).toFixed(2)+"%";
    
            OKpercentin += 1
            window.document.getElementById('td_OKpercentin').innerText = OKpercentin.toFixed(0)+"%";
    
            if(OKpercentin==100){
                clearInterval(votaOK)
            }
    
        },percentintempo)
    },36*percentintempo)

    setTimeout(function(){
        contest = evKS
        var KSpercentin = 0
    
        var votaKS = setInterval(function(){
    
            var NOVOdem = parseInt(pop.KS*gauss(demmean.KS,desvio)/particao)
            var NOVOrep = parseInt(pop.KS*gauss(repmean.KS,desvio)/particao)
            var NOVOlib = parseInt(pop.KS*gauss(libmean.KS,desvio)/particao)
    
            demKSvotes += NOVOdem
            repKSvotes += NOVOrep
            libKSvotes += NOVOlib
    
            KSvotes = demKSvotes+repKSvotes+libKSvotes
            zzzKSvotes = pop.KS-KSvotes
    
            demUSvotes += NOVOdem
            repUSvotes += NOVOrep
            libUSvotes += NOVOlib
    
            if(demKSvotes>repKSvotes && demKSvotes>libKSvotes){
                vetorEstado[33].style.fill = demcolor;
                if(zzzKSvotes+repKSvotes<demKSvotes/chamada && zzzKSvotes+libKSvotes<demKSvotes/chamada){
                    vetorEstado[33].style.fill = demcolorforte;
                    evDinKS = evKS
                }
            }else if(repKSvotes>demKSvotes && repKSvotes>libKSvotes){
                vetorEstado[33].style.fill = repcolor;
                if(zzzKSvotes+demKSvotes<repKSvotes/chamada && zzzKSvotes+libKSvotes<repKSvotes/chamada){
                    vetorEstado[33].style.fill = repcolorforte;
                    evRinKS = evKS
                }
            }else{
                vetorEstado[33].style.fill = libcolor;
            }
    
            window.document.getElementById('td_demKSvotes').innerText = demKSvotes.toLocaleString('en-us');
            window.document.getElementById('td_repKSvotes').innerText = repKSvotes.toLocaleString('en-us');
            window.document.getElementById('td_libKSvotes').innerText = libKSvotes.toLocaleString('en-us');
            window.document.getElementById('td_demKSpercent').innerText = (100*demKSvotes/KSvotes).toFixed(2)+"%";
            window.document.getElementById('td_repKSpercent').innerText = (100*repKSvotes/KSvotes).toFixed(2)+"%";
            window.document.getElementById('td_libKSpercent').innerText = (100*libKSvotes/KSvotes).toFixed(2)+"%";
    
            KSpercentin += 1
            window.document.getElementById('td_KSpercentin').innerText = KSpercentin.toFixed(0)+"%";
    
            if(KSpercentin==100){
                clearInterval(votaKS)
            }
    
        },percentintempo)
    },35*percentintempo)

    setTimeout(function(){
        contest = evNE
        var NEpercentin = 0
    
        var votaNE = setInterval(function(){
    
            var NOVOdem = parseInt(pop.NE*gauss(demmean.NE,desvio)/particao)
            var NOVOrep = parseInt(pop.NE*gauss(repmean.NE,desvio)/particao)
            var NOVOlib = parseInt(pop.NE*gauss(libmean.NE,desvio)/particao)
    
            demNEvotes += NOVOdem
            repNEvotes += NOVOrep
            libNEvotes += NOVOlib
    
            NEvotes = demNEvotes+repNEvotes+libNEvotes
            zzzNEvotes = pop.NE-NEvotes
    
            demUSvotes += NOVOdem
            repUSvotes += NOVOrep
            libUSvotes += NOVOlib
    
            if(demNEvotes>repNEvotes && demNEvotes>libNEvotes){
                vetorEstado[31].style.fill = demcolor;
                if(zzzNEvotes+repNEvotes<demNEvotes/chamada && zzzNEvotes+libNEvotes<demNEvotes/chamada){
                    vetorEstado[31].style.fill = demcolorforte;
                    evDinNE = evNE
                }
            }else if(repNEvotes>demNEvotes && repNEvotes>libNEvotes){
                vetorEstado[31].style.fill = repcolor;
                if(zzzNEvotes+demNEvotes<repNEvotes/chamada && zzzNEvotes+libNEvotes<repNEvotes/chamada){
                    vetorEstado[31].style.fill = repcolorforte;
                    evRinNE = evNE
                }
            }else{
                vetorEstado[31].style.fill = libcolor;
            }
    
            window.document.getElementById('td_demNEvotes').innerText = demNEvotes.toLocaleString('en-us');
            window.document.getElementById('td_repNEvotes').innerText = repNEvotes.toLocaleString('en-us');
            window.document.getElementById('td_libNEvotes').innerText = libNEvotes.toLocaleString('en-us');
            window.document.getElementById('td_demNEpercent').innerText = (100*demNEvotes/NEvotes).toFixed(2)+"%";
            window.document.getElementById('td_repNEpercent').innerText = (100*repNEvotes/NEvotes).toFixed(2)+"%";
            window.document.getElementById('td_libNEpercent').innerText = (100*libNEvotes/NEvotes).toFixed(2)+"%";
    
            NEpercentin += 1
            window.document.getElementById('td_NEpercentin').innerText = NEpercentin.toFixed(0)+"%";
    
            if(NEpercentin==100){
                clearInterval(votaNE)
            }
    
        },percentintempo)
    },37*percentintempo)

    setTimeout(function(){
        contest = evSD
        var SDpercentin = 0
    
        var votaSD = setInterval(function(){
    
            var NOVOdem = parseInt(pop.SD*gauss(demmean.SD,desvio)/particao)
            var NOVOrep = parseInt(pop.SD*gauss(repmean.SD,desvio)/particao)
            var NOVOlib = parseInt(pop.SD*gauss(libmean.SD,desvio)/particao)
    
            demSDvotes += NOVOdem
            repSDvotes += NOVOrep
            libSDvotes += NOVOlib
    
            SDvotes = demSDvotes+repSDvotes+libSDvotes
            zzzSDvotes = pop.SD-SDvotes
    
            demUSvotes += NOVOdem
            repUSvotes += NOVOrep
            libUSvotes += NOVOlib
    
            if(demSDvotes>repSDvotes && demSDvotes>libSDvotes){
                vetorEstado[29].style.fill = demcolor;
                if(zzzSDvotes+repSDvotes<demSDvotes/chamada && zzzSDvotes+libSDvotes<demSDvotes/chamada){
                    vetorEstado[29].style.fill = demcolorforte;
                    evDinSD = evSD
                }
            }else if(repSDvotes>demSDvotes && repSDvotes>libSDvotes){
                vetorEstado[29].style.fill = repcolor;
                if(zzzSDvotes+demSDvotes<repSDvotes/chamada && zzzSDvotes+libSDvotes<repSDvotes/chamada){
                    vetorEstado[29].style.fill = repcolorforte;
                    evRinSD = evSD
                }
            }else{
                vetorEstado[29].style.fill = libcolor;
            }
    
            window.document.getElementById('td_demSDvotes').innerText = demSDvotes.toLocaleString('en-us');
            window.document.getElementById('td_repSDvotes').innerText = repSDvotes.toLocaleString('en-us');
            window.document.getElementById('td_libSDvotes').innerText = libSDvotes.toLocaleString('en-us');
            window.document.getElementById('td_demSDpercent').innerText = (100*demSDvotes/SDvotes).toFixed(2)+"%";
            window.document.getElementById('td_repSDpercent').innerText = (100*repSDvotes/SDvotes).toFixed(2)+"%";
            window.document.getElementById('td_libSDpercent').innerText = (100*libSDvotes/SDvotes).toFixed(2)+"%";
    
            SDpercentin += 1
            window.document.getElementById('td_SDpercentin').innerText = SDpercentin.toFixed(0)+"%";
    
            if(SDpercentin==100){
                clearInterval(votaSD)
            }
    
        },percentintempo)
    },37*percentintempo)

    setTimeout(function(){
    contest = evND
    var NDpercentin = 0

    var votaND = setInterval(function(){

        var NOVOdem = parseInt(pop.ND*gauss(demmean.ND,desvio)/particao)
        var NOVOrep = parseInt(pop.ND*gauss(repmean.ND,desvio)/particao)
        var NOVOlib = parseInt(pop.ND*gauss(libmean.ND,desvio)/particao)

        demNDvotes += NOVOdem
        repNDvotes += NOVOrep
        libNDvotes += NOVOlib

        NDvotes = demNDvotes+repNDvotes+libNDvotes
        zzzNDvotes = pop.ND-NDvotes

        demUSvotes += NOVOdem
        repUSvotes += NOVOrep
        libUSvotes += NOVOlib

        if(demNDvotes>repNDvotes && demNDvotes>libNDvotes){
            vetorEstado[21].style.fill = demcolor;
            if(zzzNDvotes+repNDvotes<demNDvotes/chamada && zzzNDvotes+libNDvotes<demNDvotes/chamada){
                vetorEstado[21].style.fill = demcolorforte;
                evDinND = evND
            }
        }else if(repNDvotes>demNDvotes && repNDvotes>libNDvotes){
            vetorEstado[21].style.fill = repcolor;
            if(zzzNDvotes+demNDvotes<repNDvotes/chamada && zzzNDvotes+libNDvotes<repNDvotes/chamada){
                vetorEstado[21].style.fill = repcolorforte;
                evRinND = evND
            }
        }else{
            vetorEstado[21].style.fill = libcolor;
        }

        window.document.getElementById('td_demNDvotes').innerText = demNDvotes.toLocaleString('en-us');
        window.document.getElementById('td_repNDvotes').innerText = repNDvotes.toLocaleString('en-us');
        window.document.getElementById('td_libNDvotes').innerText = libNDvotes.toLocaleString('en-us');
        window.document.getElementById('td_demNDpercent').innerText = (100*demNDvotes/NDvotes).toFixed(2)+"%";
        window.document.getElementById('td_repNDpercent').innerText = (100*repNDvotes/NDvotes).toFixed(2)+"%";
        window.document.getElementById('td_libNDpercent').innerText = (100*libNDvotes/NDvotes).toFixed(2)+"%";

        NDpercentin += 1
        window.document.getElementById('td_NDpercentin').innerText = NDpercentin.toFixed(0)+"%";

        if(NDpercentin==100){
            clearInterval(votaND)
        }

    },percentintempo)
},37*percentintempo)

setTimeout(function(){
    contest = evUT
    var UTpercentin = 0

    var votaUT = setInterval(function(){

        var NOVOdem = parseInt(pop.UT*gauss(demmean.UT,desvio)/particao)
        var NOVOrep = parseInt(pop.UT*gauss(repmean.UT,desvio)/particao)
        var NOVOlib = parseInt(pop.UT*gauss(libmean.UT,desvio)/particao)

        demUTvotes += NOVOdem
        repUTvotes += NOVOrep
        libUTvotes += NOVOlib

        UTvotes = demUTvotes+repUTvotes+libUTvotes
        zzzUTvotes = pop.UT-UTvotes

        demUSvotes += NOVOdem
        repUSvotes += NOVOrep
        libUSvotes += NOVOlib

        if(demUTvotes>repUTvotes && demUTvotes>libUTvotes){
            vetorEstado[43].style.fill = demcolor;
            if(zzzUTvotes+repUTvotes<demUTvotes/chamada && zzzUTvotes+libUTvotes<demUTvotes/chamada){
                vetorEstado[43].style.fill = demcolorforte;
                evDinUT = evUT
            }
        }else if(repUTvotes>demUTvotes && repUTvotes>libUTvotes){
            vetorEstado[43].style.fill = repcolor;
            if(zzzUTvotes+demUTvotes<repUTvotes/chamada && zzzUTvotes+libUTvotes<repUTvotes/chamada){
                vetorEstado[43].style.fill = repcolorforte;
                evRinUT = evUT
            }
        }else{
            vetorEstado[43].style.fill = libcolor;
        }

        window.document.getElementById('td_demUTvotes').innerText = demUTvotes.toLocaleString('en-us');
        window.document.getElementById('td_repUTvotes').innerText = repUTvotes.toLocaleString('en-us');
        window.document.getElementById('td_libUTvotes').innerText = libUTvotes.toLocaleString('en-us');
        window.document.getElementById('td_demUTpercent').innerText = (100*demUTvotes/UTvotes).toFixed(2)+"%";
        window.document.getElementById('td_repUTpercent').innerText = (100*repUTvotes/UTvotes).toFixed(2)+"%";
        window.document.getElementById('td_libUTpercent').innerText = (100*libUTvotes/UTvotes).toFixed(2)+"%";

        UTpercentin += 1
        window.document.getElementById('td_UTpercentin').innerText = UTpercentin.toFixed(0)+"%";

        if(UTpercentin==100){
            clearInterval(votaUT)
            if(demUTvotes>repUTvotes){
                vetorEstado[43].style.fill = demcolorforte;
                evDinUT = evUT
            }else if(repUTvotes>demUTvotes){
                vetorEstado[43].style.fill = repcolorforte;
                evRinUT = evUT
            }
        }

    },percentintempo)
},47*percentintempo)

setTimeout(function(){
    contest = evCO
    var COpercentin = 0

    var votaCO = setInterval(function(){

        var NOVOdem = parseInt(pop.CO*gauss(demmean.CO,desvio)/particao)
        var NOVOrep = parseInt(pop.CO*gauss(repmean.CO,desvio)/particao)
        var NOVOlib = parseInt(pop.CO*gauss(libmean.CO,desvio)/particao)

        demCOvotes += NOVOdem
        repCOvotes += NOVOrep
        libCOvotes += NOVOlib

        COvotes = demCOvotes+repCOvotes+libCOvotes
        zzzCOvotes = pop.CO-COvotes

        demUSvotes += NOVOdem
        repUSvotes += NOVOrep
        libUSvotes += NOVOlib

        if(demCOvotes>repCOvotes && demCOvotes>libCOvotes){
            vetorEstado[45].style.fill = demcolor;
            if(zzzCOvotes+repCOvotes<demCOvotes/chamada && zzzCOvotes+libCOvotes<demCOvotes/chamada){
                vetorEstado[45].style.fill = demcolorforte;
                evDinCO = evCO
            }
        }else if(repCOvotes>demCOvotes && repCOvotes>libCOvotes){
            vetorEstado[45].style.fill = repcolor;
            if(zzzCOvotes+demCOvotes<repCOvotes/chamada && zzzCOvotes+libCOvotes<repCOvotes/chamada){
                vetorEstado[45].style.fill = repcolorforte;
                evRinCO = evCO
            }
        }else{
            vetorEstado[45].style.fill = libcolor;
        }

        window.document.getElementById('td_demCOvotes').innerText = demCOvotes.toLocaleString('en-us');
        window.document.getElementById('td_repCOvotes').innerText = repCOvotes.toLocaleString('en-us');
        window.document.getElementById('td_libCOvotes').innerText = libCOvotes.toLocaleString('en-us');
        window.document.getElementById('td_demCOpercent').innerText = (100*demCOvotes/COvotes).toFixed(2)+"%";
        window.document.getElementById('td_repCOpercent').innerText = (100*repCOvotes/COvotes).toFixed(2)+"%";
        window.document.getElementById('td_libCOpercent').innerText = (100*libCOvotes/COvotes).toFixed(2)+"%";

        COpercentin += 1
        window.document.getElementById('td_COpercentin').innerText = COpercentin.toFixed(0)+"%";

        if(COpercentin==100){
            clearInterval(votaCO)
        }

    },percentintempo)
},42*percentintempo)

setTimeout(function(){
    contest = evWY
    var WYpercentin = 0

    var votaWY = setInterval(function(){

        var NOVOdem = parseInt(pop.WY*gauss(demmean.WY,desvio)/particao)
        var NOVOrep = parseInt(pop.WY*gauss(repmean.WY,desvio)/particao)
        var NOVOlib = parseInt(pop.WY*gauss(libmean.WY,desvio)/particao)

        demWYvotes += NOVOdem
        repWYvotes += NOVOrep
        libWYvotes += NOVOlib

        WYvotes = demWYvotes+repWYvotes+libWYvotes
        zzzWYvotes = pop.WY-WYvotes

        demUSvotes += NOVOdem
        repUSvotes += NOVOrep
        libUSvotes += NOVOlib

        if(demWYvotes>repWYvotes && demWYvotes>libWYvotes){
            vetorEstado[16].style.fill = demcolor;
            if(zzzWYvotes+repWYvotes<demWYvotes/chamada && zzzWYvotes+libWYvotes<demWYvotes/chamada){
                vetorEstado[16].style.fill = demcolorforte;
                evDinWY = evWY
            }
        }else if(repWYvotes>demWYvotes && repWYvotes>libWYvotes){
            vetorEstado[16].style.fill = repcolor;
            if(zzzWYvotes+demWYvotes<repWYvotes/chamada && zzzWYvotes+libWYvotes<repWYvotes/chamada){
                vetorEstado[16].style.fill = repcolorforte;
                evRinWY = evWY
            }
        }else{
            vetorEstado[16].style.fill = libcolor;
        }

        window.document.getElementById('td_demWYvotes').innerText = demWYvotes.toLocaleString('en-us');
        window.document.getElementById('td_repWYvotes').innerText = repWYvotes.toLocaleString('en-us');
        window.document.getElementById('td_libWYvotes').innerText = libWYvotes.toLocaleString('en-us');
        window.document.getElementById('td_demWYpercent').innerText = (100*demWYvotes/WYvotes).toFixed(2)+"%";
        window.document.getElementById('td_repWYpercent').innerText = (100*repWYvotes/WYvotes).toFixed(2)+"%";
        window.document.getElementById('td_libWYpercent').innerText = (100*libWYvotes/WYvotes).toFixed(2)+"%";

        WYpercentin += 1
        window.document.getElementById('td_WYpercentin').innerText = WYpercentin.toFixed(0)+"%";

        if(WYpercentin==100){
            clearInterval(votaWY)
        }

    },percentintempo)
},44*percentintempo)

setTimeout(function(){
    contest = evAK
    var AKpercentin = 0

    var votaAK = setInterval(function(){

        var NOVOdem = parseInt(pop.AK*gauss(demmean.AK,desvio)/particao)
        var NOVOrep = parseInt(pop.AK*gauss(repmean.AK,desvio)/particao)
        var NOVOlib = parseInt(pop.AK*gauss(libmean.AK,desvio)/particao)

        demAKvotes += NOVOdem
        repAKvotes += NOVOrep
        libAKvotes += NOVOlib

        AKvotes = demAKvotes+repAKvotes+libAKvotes
        zzzAKvotes = pop.AK-AKvotes

        demUSvotes += NOVOdem
        repUSvotes += NOVOrep
        libUSvotes += NOVOlib

        if(demAKvotes>repAKvotes && demAKvotes>libAKvotes){
            vetorEstado[50].style.fill = demcolor;
            if(zzzAKvotes+repAKvotes<demAKvotes/chamada && zzzAKvotes+libAKvotes<demAKvotes/chamada){
                vetorEstado[50].style.fill = demcolorforte;
                evDinAK = evAK
            }
        }else if(repAKvotes>demAKvotes && repAKvotes>libAKvotes){
            vetorEstado[50].style.fill = repcolor;
            if(zzzAKvotes+demAKvotes<repAKvotes/chamada && zzzAKvotes+libAKvotes<repAKvotes/chamada){
                vetorEstado[50].style.fill = repcolorforte;
                evRinAK = evAK
            }
        }else{
            vetorEstado[50].style.fill = libcolor;
        }

        window.document.getElementById('td_demAKvotes').innerText = demAKvotes.toLocaleString('en-us');
        window.document.getElementById('td_repAKvotes').innerText = repAKvotes.toLocaleString('en-us');
        window.document.getElementById('td_libAKvotes').innerText = libAKvotes.toLocaleString('en-us');
        window.document.getElementById('td_demAKpercent').innerText = (100*demAKvotes/AKvotes).toFixed(2)+"%";
        window.document.getElementById('td_repAKpercent').innerText = (100*repAKvotes/AKvotes).toFixed(2)+"%";
        window.document.getElementById('td_libAKpercent').innerText = (100*libAKvotes/AKvotes).toFixed(2)+"%";

        AKpercentin += 1
        window.document.getElementById('td_AKpercentin').innerText = AKpercentin.toFixed(0)+"%";

        if(AKpercentin==100){
            clearInterval(votaAK)
        }

    },percentintempo)
},90*percentintempo)

setTimeout(function(){
    contest = evHI
    var HIpercentin = 0

    var votaHI = setInterval(function(){

        var NOVOdem = parseInt(pop.HI*gauss(demmean.HI,desvio)/particao)
        var NOVOrep = parseInt(pop.HI*gauss(repmean.HI,desvio)/particao)
        var NOVOlib = parseInt(pop.HI*gauss(libmean.HI,desvio)/particao)

        demHIvotes += NOVOdem
        repHIvotes += NOVOrep
        libHIvotes += NOVOlib

        HIvotes = demHIvotes+repHIvotes+libHIvotes
        zzzHIvotes = pop.HI-HIvotes

        demUSvotes += NOVOdem
        repUSvotes += NOVOrep
        libUSvotes += NOVOlib

        if(demHIvotes>repHIvotes && demHIvotes>libHIvotes){
            vetorEstado[49].style.fill = demcolor;
            if(zzzHIvotes+repHIvotes<demHIvotes/chamada && zzzHIvotes+libHIvotes<demHIvotes/chamada){
                vetorEstado[49].style.fill = demcolorforte;
                evDinHI = evHI
            }
        }else if(repHIvotes>demHIvotes && repHIvotes>libHIvotes){
            vetorEstado[49].style.fill = repcolor;
            if(zzzHIvotes+demHIvotes<repHIvotes/chamada && zzzHIvotes+libHIvotes<repHIvotes/chamada){
                vetorEstado[49].style.fill = repcolorforte;
                evRinHI = evHI
            }
        }else{
            vetorEstado[49].style.fill = libcolor;
        }

        window.document.getElementById('td_demHIvotes').innerText = demHIvotes.toLocaleString('en-us');
        window.document.getElementById('td_repHIvotes').innerText = repHIvotes.toLocaleString('en-us');
        window.document.getElementById('td_libHIvotes').innerText = libHIvotes.toLocaleString('en-us');
        window.document.getElementById('td_demHIpercent').innerText = (100*demHIvotes/HIvotes).toFixed(2)+"%";
        window.document.getElementById('td_repHIpercent').innerText = (100*repHIvotes/HIvotes).toFixed(2)+"%";
        window.document.getElementById('td_libHIpercent').innerText = (100*libHIvotes/HIvotes).toFixed(2)+"%";

        HIpercentin += 1
        window.document.getElementById('td_HIpercentin').innerText = HIpercentin.toFixed(0)+"%";

        if(HIpercentin==100){
            clearInterval(votaHI)
        }

    },percentintempo)
},88*percentintempo)

    setTimeout(function(){
        contest = evNC
        var NCpercentin = 0
    
        var votaNC = setInterval(function(){
    
            var NOVOdem = parseInt(pop.NC*gauss(demmean.NC,desvio)/particao)
            var NOVOrep = parseInt(pop.NC*gauss(repmean.NC,desvio)/particao)
            var NOVOlib = parseInt(pop.NC*gauss(libmean.NC,desvio)/particao)
    
            demNCvotes += NOVOdem
            repNCvotes += NOVOrep
            libNCvotes += NOVOlib
    
            NCvotes = demNCvotes+repNCvotes+libNCvotes
            zzzNCvotes = pop.NC-NCvotes
    
            demUSvotes += NOVOdem
            repUSvotes += NOVOrep
            libUSvotes += NOVOlib
    
            if(demNCvotes>repNCvotes && demNCvotes>libNCvotes){
                vetorEstado[23].style.fill = demcolor;
                if(zzzNCvotes+repNCvotes<demNCvotes/chamada && zzzNCvotes+libNCvotes<demNCvotes/chamada){
                    vetorEstado[23].style.fill = demcolorforte;
                    evDinNC = evNC
                }
            }else if(repNCvotes>demNCvotes && repNCvotes>libNCvotes){
                vetorEstado[23].style.fill = repcolor;
                if(zzzNCvotes+demNCvotes<repNCvotes/chamada && zzzNCvotes+libNCvotes<repNCvotes/chamada){
                    vetorEstado[23].style.fill = repcolorforte;
                    evRinNC = evNC
                }
            }else{
                vetorEstado[23].style.fill = libcolor;
            }
    
            window.document.getElementById('td_demNCvotes').innerText = demNCvotes.toLocaleString('en-us');
            window.document.getElementById('td_repNCvotes').innerText = repNCvotes.toLocaleString('en-us');
            window.document.getElementById('td_libNCvotes').innerText = libNCvotes.toLocaleString('en-us');
            window.document.getElementById('td_demNCpercent').innerText = (100*demNCvotes/NCvotes).toFixed(2)+"%";
            window.document.getElementById('td_repNCpercent').innerText = (100*repNCvotes/NCvotes).toFixed(2)+"%";
            window.document.getElementById('td_libNCpercent').innerText = (100*libNCvotes/NCvotes).toFixed(2)+"%";
    
            NCpercentin += 1
            window.document.getElementById('td_NCpercentin').innerText = NCpercentin.toFixed(0)+"%";
    
            if(NCpercentin==100){
                clearInterval(votaNC)
            }
    
        },percentintempo)
    },8*percentintempo)

    setTimeout(function(){
        contest = evSC
        var SCpercentin = 0
    
        var votaSC = setInterval(function(){
    
            var NOVOdem = parseInt(pop.SC*gauss(demmean.SC,desvio)/particao)
            var NOVOrep = parseInt(pop.SC*gauss(repmean.SC,desvio)/particao)
            var NOVOlib = parseInt(pop.SC*gauss(libmean.SC,desvio)/particao)
    
            demSCvotes += NOVOdem
            repSCvotes += NOVOrep
            libSCvotes += NOVOlib
    
            SCvotes = demSCvotes+repSCvotes+libSCvotes
            zzzSCvotes = pop.SC-SCvotes
    
            demUSvotes += NOVOdem
            repUSvotes += NOVOrep
            libUSvotes += NOVOlib
    
            if(demSCvotes>repSCvotes && demSCvotes>libSCvotes){
                vetorEstado[15].style.fill = demcolor;
                if(zzzSCvotes+repSCvotes<demSCvotes/chamada && zzzSCvotes+libSCvotes<demSCvotes/chamada){
                    vetorEstado[15].style.fill = demcolorforte;
                    evDinSC = evSC
                }
            }else if(repSCvotes>demSCvotes && repSCvotes>libSCvotes){
                vetorEstado[15].style.fill = repcolor;
                if(zzzSCvotes+demSCvotes<repSCvotes/chamada && zzzSCvotes+libSCvotes<repSCvotes/chamada){
                    vetorEstado[15].style.fill = repcolorforte;
                    evRinSC = evSC
                }
            }else{
                vetorEstado[15].style.fill = libcolor;
            }
    
            window.document.getElementById('td_demSCvotes').innerText = demSCvotes.toLocaleString('en-us');
            window.document.getElementById('td_repSCvotes').innerText = repSCvotes.toLocaleString('en-us');
            window.document.getElementById('td_libSCvotes').innerText = libSCvotes.toLocaleString('en-us');
            window.document.getElementById('td_demSCpercent').innerText = (100*demSCvotes/SCvotes).toFixed(2)+"%";
            window.document.getElementById('td_repSCpercent').innerText = (100*repSCvotes/SCvotes).toFixed(2)+"%";
            window.document.getElementById('td_libSCpercent').innerText = (100*libSCvotes/SCvotes).toFixed(2)+"%";
    
            SCpercentin += 1
            window.document.getElementById('td_SCpercentin').innerText = SCpercentin.toFixed(0)+"%";
    
            if(SCpercentin==100){
                clearInterval(votaSC)
            }
    
        },percentintempo)
    },12*percentintempo)

    setTimeout(function(){
        contest = evGA
        var GApercentin = 0
    
        var votaGA = setInterval(function(){
    
            var NOVOdem = parseInt(pop.GA*gauss(demmean.GA,desvio)/particao)
            var NOVOrep = parseInt(pop.GA*gauss(repmean.GA,desvio)/particao)
            var NOVOlib = parseInt(pop.GA*gauss(libmean.GA,desvio)/particao)
    
            demGAvotes += NOVOdem
            repGAvotes += NOVOrep
            libGAvotes += NOVOlib
    
            GAvotes = demGAvotes+repGAvotes+libGAvotes
            zzzGAvotes = pop.GA-GAvotes
    
            demUSvotes += NOVOdem
            repUSvotes += NOVOrep
            libUSvotes += NOVOlib
    
            if(demGAvotes>repGAvotes && demGAvotes>libGAvotes){
                vetorEstado[30].style.fill = demcolor;
                if(zzzGAvotes+repGAvotes<demGAvotes/chamada && zzzGAvotes+libGAvotes<demGAvotes/chamada){
                    vetorEstado[30].style.fill = demcolorforte;
                    evDinGA = evGA
                }
            }else if(repGAvotes>demGAvotes && repGAvotes>libGAvotes){
                vetorEstado[30].style.fill = repcolor;
                if(zzzGAvotes+demGAvotes<repGAvotes/chamada && zzzGAvotes+libGAvotes<repGAvotes/chamada){
                    vetorEstado[30].style.fill = repcolorforte;
                    evRinGA = evGA
                }
            }else{
                vetorEstado[30].style.fill = libcolor;
            }
    
            window.document.getElementById('td_demGAvotes').innerText = demGAvotes.toLocaleString('en-us');
            window.document.getElementById('td_repGAvotes').innerText = repGAvotes.toLocaleString('en-us');
            window.document.getElementById('td_libGAvotes').innerText = libGAvotes.toLocaleString('en-us');
            window.document.getElementById('td_demGApercent').innerText = (100*demGAvotes/GAvotes).toFixed(2)+"%";
            window.document.getElementById('td_repGApercent').innerText = (100*repGAvotes/GAvotes).toFixed(2)+"%";
            window.document.getElementById('td_libGApercent').innerText = (100*libGAvotes/GAvotes).toFixed(2)+"%";
    
            GApercentin += 1
            window.document.getElementById('td_GApercentin').innerText = GApercentin.toFixed(0)+"%";
    
            if(GApercentin==100){
                clearInterval(votaGA)
            }
    
        },percentintempo)
    },19*percentintempo)

    setTimeout(function(){
        contest = evTX
        var TXpercentin = 0
    
        var votaTX = setInterval(function(){
    
            var NOVOdem = parseInt(pop.TX*gauss(demmean.TX,desvio)/particao)
            var NOVOrep = parseInt(pop.TX*gauss(repmean.TX,desvio)/particao)
            var NOVOlib = parseInt(pop.TX*gauss(libmean.TX,desvio)/particao)
    
            demTXvotes += NOVOdem
            repTXvotes += NOVOrep
            libTXvotes += NOVOlib
    
            TXvotes = demTXvotes+repTXvotes+libTXvotes
            zzzTXvotes = pop.TX-TXvotes
    
            demUSvotes += NOVOdem
            repUSvotes += NOVOrep
            libUSvotes += NOVOlib
    
            if(demTXvotes>repTXvotes && demTXvotes>libTXvotes){
                vetorEstado[44].style.fill = demcolor;
                if(zzzTXvotes+repTXvotes<demTXvotes/chamada && zzzTXvotes+libTXvotes<demTXvotes/chamada){
                    vetorEstado[44].style.fill = demcolorforte;
                    evDinTX = evTX
                }
            }else if(repTXvotes>demTXvotes && repTXvotes>libTXvotes){
                vetorEstado[44].style.fill = repcolor;
                if(zzzTXvotes+demTXvotes<repTXvotes/chamada && zzzTXvotes+libTXvotes<repTXvotes/chamada){
                    vetorEstado[44].style.fill = repcolorforte;
                    evRinTX = evTX
                }
            }else{
                vetorEstado[44].style.fill = libcolor;
            }
    
            window.document.getElementById('td_demTXvotes').innerText = demTXvotes.toLocaleString('en-us');
            window.document.getElementById('td_repTXvotes').innerText = repTXvotes.toLocaleString('en-us');
            window.document.getElementById('td_libTXvotes').innerText = libTXvotes.toLocaleString('en-us');
            window.document.getElementById('td_demTXpercent').innerText = (100*demTXvotes/TXvotes).toFixed(2)+"%";
            window.document.getElementById('td_repTXpercent').innerText = (100*repTXvotes/TXvotes).toFixed(2)+"%";
            window.document.getElementById('td_libTXpercent').innerText = (100*libTXvotes/TXvotes).toFixed(2)+"%";
    
            TXpercentin += 1
            window.document.getElementById('td_TXpercentin').innerText = TXpercentin.toFixed(0)+"%";
    
            if(TXpercentin==100){
                clearInterval(votaTX)
            }
    
        },percentintempo)
    },40*percentintempo)

    setTimeout(function(){
        contest = evMT
        var MTpercentin = 0

        var votaMT = setInterval(function(){

            var NOVOdem = parseInt(pop.MT*gauss(demmean.MT,desvio)/particao)
            var NOVOrep = parseInt(pop.MT*gauss(repmean.MT,desvio)/particao)
            var NOVOlib = parseInt(pop.MT*gauss(libmean.MT,desvio)/particao)

            demMTvotes += NOVOdem
            repMTvotes += NOVOrep
            libMTvotes += NOVOlib

            MTvotes = demMTvotes+repMTvotes+libMTvotes
            zzzMTvotes = pop.MT-MTvotes

            demUSvotes += NOVOdem
            repUSvotes += NOVOrep
            libUSvotes += NOVOlib

            if(demMTvotes>repMTvotes && demMTvotes>libMTvotes){
                vetorEstado[42].style.fill = demcolor;
                if(zzzMTvotes+repMTvotes<demMTvotes/chamada && zzzMTvotes+libMTvotes<demMTvotes/chamada){
                    vetorEstado[42].style.fill = demcolorforte;
                    evDinMT = evMT
                }
            }else if(repMTvotes>demMTvotes && repMTvotes>libMTvotes){
                vetorEstado[42].style.fill = repcolor;
                if(zzzMTvotes+demMTvotes<repMTvotes/chamada && zzzMTvotes+libMTvotes<repMTvotes/chamada){
                    vetorEstado[42].style.fill = repcolorforte;
                    evRinMT = evMT
                }
            }else{
                vetorEstado[42].style.fill = libcolor;
            }

            window.document.getElementById('td_demMTvotes').innerText = demMTvotes.toLocaleString('en-us');
            window.document.getElementById('td_repMTvotes').innerText = repMTvotes.toLocaleString('en-us');
            window.document.getElementById('td_libMTvotes').innerText = libMTvotes.toLocaleString('en-us');
            window.document.getElementById('td_demMTpercent').innerText = (100*demMTvotes/MTvotes).toFixed(2)+"%";
            window.document.getElementById('td_repMTpercent').innerText = (100*repMTvotes/MTvotes).toFixed(2)+"%";
            window.document.getElementById('td_libMTpercent').innerText = (100*libMTvotes/MTvotes).toFixed(2)+"%";

            MTpercentin += 1
            window.document.getElementById('td_MTpercentin').innerText = MTpercentin.toFixed(0)+"%";

            if(MTpercentin==100){
                clearInterval(votaMT)
            }

        },percentintempo)
    },49*percentintempo)

    setTimeout(function(){
        contest = evID
        var IDpercentin = 0
    
        var votaID = setInterval(function(){
    
            var NOVOdem = parseInt(pop.ID*gauss(demmean.ID,desvio)/particao)
            var NOVOrep = parseInt(pop.ID*gauss(repmean.ID,desvio)/particao)
            var NOVOlib = parseInt(pop.ID*gauss(libmean.ID,desvio)/particao)
    
            demIDvotes += NOVOdem
            repIDvotes += NOVOrep
            libIDvotes += NOVOlib
    
            IDvotes = demIDvotes+repIDvotes+libIDvotes
            zzzIDvotes = pop.ID-IDvotes
    
            demUSvotes += NOVOdem
            repUSvotes += NOVOrep
            libUSvotes += NOVOlib
    
            if(demIDvotes>repIDvotes && demIDvotes>libIDvotes){
                vetorEstado[37].style.fill = demcolor;
                if(zzzIDvotes+repIDvotes<demIDvotes/chamada && zzzIDvotes+libIDvotes<demIDvotes/chamada){
                    vetorEstado[37].style.fill = demcolorforte;
                    evDinID = evID
                }
            }else if(repIDvotes>demIDvotes && repIDvotes>libIDvotes){
                vetorEstado[37].style.fill = repcolor;
                if(zzzIDvotes+demIDvotes<repIDvotes/chamada && zzzIDvotes+libIDvotes<repIDvotes/chamada){
                    vetorEstado[37].style.fill = repcolorforte;
                    evRinID = evID
                }
            }else{
                vetorEstado[37].style.fill = libcolor;
            }
    
            window.document.getElementById('td_demIDvotes').innerText = demIDvotes.toLocaleString('en-us');
            window.document.getElementById('td_repIDvotes').innerText = repIDvotes.toLocaleString('en-us');
            window.document.getElementById('td_libIDvotes').innerText = libIDvotes.toLocaleString('en-us');
            window.document.getElementById('td_demIDpercent').innerText = (100*demIDvotes/IDvotes).toFixed(2)+"%";
            window.document.getElementById('td_repIDpercent').innerText = (100*repIDvotes/IDvotes).toFixed(2)+"%";
            window.document.getElementById('td_libIDpercent').innerText = (100*libIDvotes/IDvotes).toFixed(2)+"%";
    
            IDpercentin += 1
            window.document.getElementById('td_IDpercentin').innerText = IDpercentin.toFixed(0)+"%";
    
            if(IDpercentin==100){
                clearInterval(votaID)
            }
    
        },percentintempo)
    },50*percentintempo)

    setTimeout(function(){
        contest = evWA
        var WApercentin = 0
    
        var votaWA = setInterval(function(){
    
            var NOVOdem = parseInt(pop.WA*gauss(demmean.WA,desvio)/particao)
            var NOVOrep = parseInt(pop.WA*gauss(repmean.WA,desvio)/particao)
            var NOVOlib = parseInt(pop.WA*gauss(libmean.WA,desvio)/particao)
    
            demWAvotes += NOVOdem
            repWAvotes += NOVOrep
            libWAvotes += NOVOlib
    
            WAvotes = demWAvotes+repWAvotes+libWAvotes
            zzzWAvotes = pop.WA-WAvotes
    
            demUSvotes += NOVOdem
            repUSvotes += NOVOrep
            libUSvotes += NOVOlib
    
            if(demWAvotes>repWAvotes && demWAvotes>libWAvotes){
                vetorEstado[35].style.fill = demcolor;
                if(zzzWAvotes+repWAvotes<demWAvotes/chamada && zzzWAvotes+libWAvotes<demWAvotes/chamada){
                    vetorEstado[35].style.fill = demcolorforte;
                    evDinWA = evWA
                }
            }else if(repWAvotes>demWAvotes && repWAvotes>libWAvotes){
                vetorEstado[35].style.fill = repcolor;
                if(zzzWAvotes+demWAvotes<repWAvotes/chamada && zzzWAvotes+libWAvotes<repWAvotes/chamada){
                    vetorEstado[35].style.fill = repcolorforte;
                    evRinWA = evWA
                }
            }else{
                vetorEstado[35].style.fill = libcolor;
            }
    
            window.document.getElementById('td_demWAvotes').innerText = demWAvotes.toLocaleString('en-us');
            window.document.getElementById('td_repWAvotes').innerText = repWAvotes.toLocaleString('en-us');
            window.document.getElementById('td_libWAvotes').innerText = libWAvotes.toLocaleString('en-us');
            window.document.getElementById('td_demWApercent').innerText = (100*demWAvotes/WAvotes).toFixed(2)+"%";
            window.document.getElementById('td_repWApercent').innerText = (100*repWAvotes/WAvotes).toFixed(2)+"%";
            window.document.getElementById('td_libWApercent').innerText = (100*libWAvotes/WAvotes).toFixed(2)+"%";
    
            WApercentin += 1
            window.document.getElementById('td_WApercentin').innerText = WApercentin.toFixed(0)+"%";
    
            if(WApercentin==100){
                clearInterval(votaWA)
            }
    
        },percentintempo)
    },58*percentintempo)

    setTimeout(function(){
        contest = evOR
        var ORpercentin = 0
    
        var votaOR = setInterval(function(){
    
            var NOVOdem = parseInt(pop.OR*gauss(demmean.OR,desvio)/particao)
            var NOVOrep = parseInt(pop.OR*gauss(repmean.OR,desvio)/particao)
            var NOVOlib = parseInt(pop.OR*gauss(libmean.OR,desvio)/particao)
    
            demORvotes += NOVOdem
            repORvotes += NOVOrep
            libORvotes += NOVOlib
    
            ORvotes = demORvotes+repORvotes+libORvotes
            zzzORvotes = pop.OR-ORvotes
    
            demUSvotes += NOVOdem
            repUSvotes += NOVOrep
            libUSvotes += NOVOlib
    
            if(demORvotes>repORvotes && demORvotes>libORvotes){
                vetorEstado[46].style.fill = demcolor;
                if(zzzORvotes+repORvotes<demORvotes/chamada && zzzORvotes+libORvotes<demORvotes/chamada){
                    vetorEstado[46].style.fill = demcolorforte;
                    evDinOR = evOR
                }
            }else if(repORvotes>demORvotes && repORvotes>libORvotes){
                vetorEstado[46].style.fill = repcolor;
                if(zzzORvotes+demORvotes<repORvotes/chamada && zzzORvotes+libORvotes<repORvotes/chamada){
                    vetorEstado[46].style.fill = repcolorforte;
                    evRinOR = evOR
                }
            }else{
                vetorEstado[46].style.fill = libcolor;
            }
    
            window.document.getElementById('td_demORvotes').innerText = demORvotes.toLocaleString('en-us');
            window.document.getElementById('td_repORvotes').innerText = repORvotes.toLocaleString('en-us');
            window.document.getElementById('td_libORvotes').innerText = libORvotes.toLocaleString('en-us');
            window.document.getElementById('td_demORpercent').innerText = (100*demORvotes/ORvotes).toFixed(2)+"%";
            window.document.getElementById('td_repORpercent').innerText = (100*repORvotes/ORvotes).toFixed(2)+"%";
            window.document.getElementById('td_libORpercent').innerText = (100*libORvotes/ORvotes).toFixed(2)+"%";
    
            ORpercentin += 1
            window.document.getElementById('td_ORpercentin').innerText = ORpercentin.toFixed(0)+"%";
    
            if(ORpercentin==100){
                clearInterval(votaOR)
            }
    
        },percentintempo)
    },59*percentintempo)

    setTimeout(function(){
        contest = evCA
        var CApercentin = 0
    
        var votaCA = setInterval(function(){
    
            var NOVOdem = parseInt(pop.CA*gauss(demmean.CA,desvio)/particao)
            var NOVOrep = parseInt(pop.CA*gauss(repmean.CA,desvio)/particao)
            var NOVOlib = parseInt(pop.CA*gauss(libmean.CA,desvio)/particao)
    
            demCAvotes += NOVOdem
            repCAvotes += NOVOrep
            libCAvotes += NOVOlib
    
            CAvotes = demCAvotes+repCAvotes+libCAvotes
            zzzCAvotes = pop.CA-CAvotes
    
            demUSvotes += NOVOdem
            repUSvotes += NOVOrep
            libUSvotes += NOVOlib
    
            if(demCAvotes>repCAvotes && demCAvotes>libCAvotes){
                vetorEstado[41].style.fill = demcolor;
                if(zzzCAvotes+repCAvotes<demCAvotes/chamada && zzzCAvotes+libCAvotes<demCAvotes/chamada){
                    vetorEstado[41].style.fill = demcolorforte;
                    evDinCA = evCA
                }
            }else if(repCAvotes>demCAvotes && repCAvotes>libCAvotes){
                vetorEstado[41].style.fill = repcolor;
                if(zzzCAvotes+demCAvotes<repCAvotes/chamada && zzzCAvotes+libCAvotes<repCAvotes/chamada){
                    vetorEstado[41].style.fill = repcolorforte;
                    evRinCA = evCA
                }
            }else{
                vetorEstado[41].style.fill = libcolor;
            }
    
            window.document.getElementById('td_demCAvotes').innerText = demCAvotes.toLocaleString('en-us');
            window.document.getElementById('td_repCAvotes').innerText = repCAvotes.toLocaleString('en-us');
            window.document.getElementById('td_libCAvotes').innerText = libCAvotes.toLocaleString('en-us');
            window.document.getElementById('td_demCApercent').innerText = (100*demCAvotes/CAvotes).toFixed(2)+"%";
            window.document.getElementById('td_repCApercent').innerText = (100*repCAvotes/CAvotes).toFixed(2)+"%";
            window.document.getElementById('td_libCApercent').innerText = (100*libCAvotes/CAvotes).toFixed(2)+"%";
    
            CApercentin += 1
            window.document.getElementById('td_CApercentin').innerText = CApercentin.toFixed(0)+"%";
    
            if(CApercentin==100){
                clearInterval(votaCA)
            }
    
        },percentintempo)
    },57*percentintempo)
    
    // APURAÇÃO
    setInterval(function(){
        //Totalizador
        USvotes = demUSvotes+repUSvotes+libUSvotes
        demUSpercent = demUSvotes/USvotes
        repUSpercent = repUSvotes/USvotes
        libUSpercent = libUSvotes/USvotes

        // Apurando US
        window.document.getElementById('td_demUSvotes').innerText = demUSvotes.toLocaleString('en-us');
        window.document.getElementById('td_repUSvotes').innerText = repUSvotes.toLocaleString('en-us');
        window.document.getElementById('td_libUSvotes').innerText = libUSvotes.toLocaleString('en-us');
        window.document.getElementById('td_demUSpercent').innerText = (100*demUSpercent).toFixed(2)+"%";
        window.document.getElementById('td_repUSpercent').innerText = (100*repUSpercent).toFixed(2)+"%";
        window.document.getElementById('td_libUSpercent').innerText = (100*libUSpercent).toFixed(2)+"%";

        window.document.getElementById('td_allUSvotes').innerText = USvotes.toLocaleString('en-us')

        evD = evDinAK+evDinAL+evDinAR+evDinAZ+evDinCA+evDinCO+evDinCT+evDinDC+evDinDE+evDinFL+evDinGA+evDinHI+evDinIA+evDinID+evDinIL+evDinIN+evDinKS+evDinKY+evDinLA+evDinMA+evDinMD+evDinME+evDinMI+evDinMN+evDinMO+evDinMS+evDinMT+evDinNC+evDinND+evDinNE+evDinNH+evDinNJ+evDinNM+evDinNV+evDinNY+evDinOH+evDinOK+evDinOR+evDinPA+evDinRI+evDinSC+evDinSD+evDinTN+evDinTX+evDinUT+evDinVA+evDinVT+evDinWA+evDinWI+evDinWV+evDinWY

        evR = evRinAK+evRinAL+evRinAR+evRinAZ+evRinCA+evRinCO+evRinCT+evRinDC+evRinDE+evRinFL+evRinGA+evRinHI+evRinIA+evRinID+evRinIL+evRinIN+evRinKS+evRinKY+evRinLA+evRinMA+evRinMD+evRinME+evRinMI+evRinMN+evRinMO+evRinMS+evRinMT+evRinNC+evRinND+evRinNE+evRinNH+evRinNJ+evRinNM+evRinNV+evRinNY+evRinOH+evRinOK+evRinOR+evRinPA+evRinRI+evRinSC+evRinSD+evRinTN+evRinTX+evRinUT+evRinVA+evRinVT+evRinWA+evRinWI+evRinWV+evRinWY

        evL = evLinAK+evLinAL+evLinAR+evLinAZ+evLinCA+evLinCO+evLinCT+evLinDC+evLinDE+evLinFL+evLinGA+evLinHI+evLinIA+evLinID+evLinIL+evLinIN+evLinKS+evLinKY+evLinLA+evLinMA+evLinMD+evLinME+evLinMI+evLinMN+evLinMO+evLinMS+evLinMT+evLinNC+evLinND+evLinNE+evLinNH+evLinNJ+evLinNM+evLinNV+evLinNY+evLinOH+evLinOK+evLinOR+evLinPA+evLinRI+evLinSC+evLinSD+evLinTN+evLinTX+evLinUT+evLinVA+evLinVT+evLinWA+evLinWI+evLinWV+evLinWY
        
        window.document.getElementById('votosD').innerText = evD;
        window.document.getElementById('votosR').innerText = evR;

    },percentintempo)
}
