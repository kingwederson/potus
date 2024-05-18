setTimeout(function(){
    contest = evSTATE
    var STATEpercentin = 0

    var votaSTATE = setInterval(function(){

        var NOVOdem = parseInt(pop.STATE*gauss(demmean.STATE,desvio)/particao)
        var NOVOrep = parseInt(pop.STATE*gauss(repmean.STATE,desvio)/particao)
        var NOVOlib = parseInt(pop.STATE*gauss(libmean.STATE,desvio)/particao)

        demSTATEvotes += NOVOdem
        repSTATEvotes += NOVOrep
        libSTATEvotes += NOVOlib

        STATEvotes = demSTATEvotes+repSTATEvotes+libSTATEvotes
        zzzSTATEvotes = pop.STATE-STATEvotes

        demUSvotes += NOVOdem
        repUSvotes += NOVOrep
        libUSvotes += NOVOlib

        if(demSTATEvotes>repSTATEvotes && demSTATEvotes>libSTATEvotes){
            vetorEstado[42].style.fill = demcolor;
            if(zzzSTATEvotes+repSTATEvotes<demSTATEvotes/chamada && zzzSTATEvotes+libSTATEvotes<demSTATEvotes/chamada){
                vetorEstado[42].style.fill = demcolorforte;
                evDinSTATE = evSTATE
            }
        }else if(repSTATEvotes>demSTATEvotes && repSTATEvotes>libSTATEvotes){
            vetorEstado[42].style.fill = repcolor;
            if(zzzSTATEvotes+demSTATEvotes<repSTATEvotes/chamada && zzzSTATEvotes+libSTATEvotes<repSTATEvotes/chamada){
                vetorEstado[42].style.fill = repcolorforte;
                evRinSTATE = evSTATE
            }
        }else{
            vetorEstado[42].style.fill = libcolor;
        }

        window.document.getElementById('td_demSTATEvotes').innerText = demSTATEvotes.toLocaleString('en-us');
        window.document.getElementById('td_repSTATEvotes').innerText = repSTATEvotes.toLocaleString('en-us');
        window.document.getElementById('td_libSTATEvotes').innerText = libSTATEvotes.toLocaleString('en-us');
        window.document.getElementById('td_demSTATEpercent').innerText = (100*demSTATEvotes/STATEvotes).toFixed(2)+"%";
        window.document.getElementById('td_repSTATEpercent').innerText = (100*repSTATEvotes/STATEvotes).toFixed(2)+"%";
        window.document.getElementById('td_libSTATEpercent').innerText = (100*libSTATEvotes/STATEvotes).toFixed(2)+"%";

        STATEpercentin += 1
        window.document.getElementById('td_STATEpercentin').innerText = STATEpercentin.toFixed(0)+"%";

        if(STATEpercentin==100){
            clearInterval(votaSTATE)
        }

    },percentintempo)
},4*percentintempo)