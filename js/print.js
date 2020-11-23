let content = document.getElementsByClassName('content')[0];

const form = document.getElementById('form');
const log = document.getElementById('log');
form.addEventListener('submit', printReport);
function printReport(event) {
    event.preventDefault();
    var units = document.getElementById('units');
    var units_research = document.getElementById('units_research');
    var el = document.getElementById('type');
    var units_array=[];
    for(let i=1;i<units.children.length;i++){
        let current=units.children[i].firstElementChild;
        if(current.checked == true){
            units_array.push(current.value);
        }
    }

 
    var units_research1=[];
    for(let j=1;j<units_research.children.length;j++){
        let current_units=units_research.children[j].firstElementChild;
        if(current_units.checked == true){
            units_research1.push(current_units.value);
        }
    }

    var units_e1=[];
    for(let k=1;k<el.children.length;k++){
        let current_units_e1=el.children[k].firstElementChild;
        if(current_units_e1.checked == true){
            units_e1.push(current_units_e1.value);
        }
    }

    var total=[];
    var contenttotal ='';
    var content_admin_2019_2020 = '';
    var content_research_2019_2020 ='';
    var content_admin_2020_2021='';
    var content_research_2020_2021='';
    total = units_array.concat(units_research1);
    //total = total.concat(units.el);

    for(var p=0;p<=units_e1.length;p++){
        console.log(units_e1[p]);
        for(var l=0;l<total.length;l++){
            var splithtml=total[l].split(".");
            console.log(splithtml);
            var data = localStorage.getItem(splithtml[0]);
            console.log(data);
            if(units_e1[p] == '19-20'){
            if(splithtml[0] === "communityandeconomicdevelopment" ||
                splithtml[0] === "facultyresearchdevelopment" ||
                splithtml[0] === "innovationdevelopmentandcommercialization(oidc)" ||
                splithtml[0] === "regulatoryandresearchcompliance" ||
                splithtml[0] === "researchfoundationhumanresources" ||
                splithtml[0] === "sponsoredprogramsadministration" ||
                splithtml[0] === "strategicplanningassessmentdataanalyticsandtechnology"){
                content_admin_2019_2020   = printadminhUnit19(units_e1[p],splithtml[0],data);
            }
            else{
                content_research_2019_2020   = printResearchUnit(units_e1[p],splithtml[0],data);
            }
            if(content_admin_2019_2020 !== ''){
                contenttotal +=content_admin_2019_2020;
            }
            if(content_research_2019_2020 !== '')
                contenttotal +=content_research_2019_2020;
            }
        if(units_e1[p] == '20-21'){

            if(splithtml[0] === "communityandeconomicdevelopment" ||
                splithtml[0] === "facultyresearchdevelopment" ||
                splithtml[0] === "innovationdevelopmentandcommercialization(oidc)" ||
                splithtml[0] === "regulatoryandresearchcompliance" ||
                splithtml[0] === "researchfoundationhumanresources" ||
                splithtml[0] === "sponsoredprogramsadministration" ||
                splithtml[0] === "strategicplanningassessmentdataanalyticsandtechnology"){
                content_admin_2020_2021= printadminhUnit20(units_e1[p],splithtml[0],data);
            }
            else{
               content_research_2020_2021 = printResearchUnit2021(units_e1[p],splithtml[0],data);
            }
            if(content_admin_2020_2021 !== ''){
                contenttotal +=content_admin_2020_2021;
            }
            if(content_research_2020_2021 !== '')
                contenttotal +=content_research_2020_2021;
            }
        }         
    }
    var win = window.open("print.html", "reportprinttemplate.html");
    win.document.write(contenttotal); // where 'html' is a variable containing your HTML
    win.document.close(); 
}

/* Research 2021*/
function printResearchUnit2021(year,filename,reportdata_1){
    let year1="";
    let reportdata ="";
    let data1 = {};

    year1 ="FY2021";
    reportdata =   JSON.parse(reportdata_1);
    data1["unit"] = reportdata.data.ExternalReference;
    reportdata = reportdata.data.FY2021;
    
    data1["mission"] = reportdata.Q31; 
    data1["vision"] = reportdata.Q32;
    //  content += addMissionAndVision(ids, data);
    data1["annualBudget"] = reportdata.Q41;
    data1["employeesState"] =checkNull( reportdata.Q42_1_1); 
    data1["employeesRF"] = checkNull(reportdata.Q42_1_2); 
    data1["fteState"] = checkNull(reportdata.Q42_2_1); 
    data1["fteRF"] =checkNull( reportdata.Q42_2_2); 
    // content += addAnnualBudget(ids, data);
    data1["proposals"] = reportdata.Q51; 
    data1["federalApplication"] = checkNull(reportdata.Q51_1_1); 
    data1["stateApplication"] = checkNull(reportdata.Q51_1_2); 
    data1["privateApplication"] = checkNull(reportdata.Q51_1_4); 
    
    addData9={1:data1["federalApplication"],2:  data1["stateApplication"],3: data1["privateApplication"]};

    data1["proposal_total"]=add(addData9);
    data1["awards"] = reportdata.Q52; 
    data1["federalAwards"] = checkNull(reportdata.Q52_1_1); 
    data1["stateAwards"] = checkNull(reportdata.Q52_1_2); 
    data1["privateAwards"] = checkNull(reportdata.Q52_1_4); 

    addData11={1:data1["federalAwards"],2:  data1["stateAwards"],3: data1["privateAwards"]};

    data1["awrds_total"]=add(addData11);

    data1["largeScale"] =checkNull( reportdata.Q53); 
    data1["proposal"] = checkNull(reportdata.Q53_1_1); 
    data1["lsAwards"] =checkNull( reportdata.Q53_1_2); 

    data1["strr"] =checkNull( reportdata.Q54);
    data1["stProposal"] =checkNull( reportdata.Q54_1_1); 
    data1["stAwards"] = checkNull(reportdata.Q54_1_2); 

    data1["publications"] = checkNull(reportdata.Q55);
    data1["booksAuthored"] = checkNull(reportdata.Q55_1_1); 
    data1["booksChapters"] =checkNull( reportdata.Q55_1_2); 
    data1["publicationsTable"] =checkNull( reportdata.Q54_1_3); 


    data1["technologyTransfer"] = checkNull(reportdata.Q56);
    data1["intellectual"] = checkNull(reportdata.Q56_1_1); 
    data1["patentsApplications"] =checkNull( reportdata.Q56_2_1); 
    data1["patentsIssued"] = checkNull(reportdata.Q56_3_1); 
    data1["patentsLicensed"] = checkNull(reportdata.Q56_4_1); 
    data1["licensedExecuted"] = checkNull(reportdata.Q56_5_1); 
    data1["licensedRevenue"] = checkNull(reportdata.Q56_6_1);
    data1["startupCompanies"] =checkNull( reportdata.Q56_7_1);
    data1["conference"] =checkNull( reportdata.Q57);
    data1["goals"] = checkNull(reportdata.Q57_1_1); 

    data1["education"] =checkNull( reportdata.Q58);
    data1["undergraduate"] =checkNull( reportdata.Q58_1_1); 
    data1["graduate_masters"] = checkNull(reportdata.Q58_2_1); 
    data1["graduate_phd"] = checkNull(reportdata.Q58_3_1); 
    data1["post"] = checkNull(reportdata.Q58_4_1); 

    let content_research1='<h1 style="text-align: center;">'+ data1.unit +'</h1><div style="margin-botton:30px;"></div><h1 style="text-align: center;">Planning Report (2020-2021)</h1>';
    content_research1 += '<h4>MISSION</h4>'+
    '<p class="mission">'+ data1.mission + '</p>' +
    '<h4>VISION</h4>'+
    '<p class="vision">'+ data1.vision + '</p>' +

    '<h4> ANNUAL BUDGET </h4>'+
    '<div class="annual-budget">' +
    '<h4> Number of State and RF Employees/FTEs.</h4>'+
    '<table width="100%"><thead><tr><td class="border_bottom border_right" style="width: 25%;"></td><th class="border_bottom" width="36.5%">State</th><th class="border_bottom" width="36.5%">RF</th></tr></thead>'+
    '<tbody><tr><th class="border_right padding_bottom padding_top">#Employees (Headcounts)</th><td style=" text-align: center;">'+ data1.employeesState + '</td><td style=" text-align: center;">'+
    data1.employeesRF + '</td></tr>'+'<tr><th class="border_right">#FTEs</th><td style=" text-align: center;">'+ data1.fteState + '</td><td style=" text-align: center;">'+
    data1.fteRF + '</td></tr></tbody></table></div>'+

    '<h4> RESEARCH PERFORMANCE TARGET </h4>'+
    '<div class="annual-budget">' +
    '<h4> The target numbers are indicated below:</h4>'+
    '<table width="100%"><thead><tr><td class="border_bottom border_right" style="width: 25%;">'+
    '</td><th class="border_bottom" width="36.5%">Your Goal for FY 20-21</th></tr></thead>'+
    '<tbody><tr><th class="border_right padding_bottom padding_top">Federal Applications</th>'+
    '<td style=" text-align: center;">'+ data1.federalApplication + '</td></tr>'+
    '<tr><th class="border_right padding_bottom padding_top">State Application</th><td style=" text-align: center;">'+
    data1.stateApplication + '</td></tr>'+
    '<tr><th class="border_right padding_bottom padding_top">Private Application</th><td style=" text-align: center;">'+
    data1.privateApplication + '</td></tr>'+
    '<tr><th class="border_right padding_bottom padding_top">Total</th><td style=" text-align: center;">'+
    data1.proposal_total + '</td></tr>'+

    '</tbody></table></div>'+
    '</br>' +
    '</br>' +

    '<h4>AWARDS </h4>'+
    '<div class="annual-budget">' +
    '<h4> The target numbers are indicated below:</h4>'+
    '<table width="100%"><thead><tr><td class="border_bottom border_right" style="width: 25%;">'+
    '</td><th class="border_bottom" width="36.5%">Your Goal for FY 20-21</th></tr></thead>'+
    '<tbody><tr><th class="border_right padding_bottom padding_top">Federal Awards</th>'+
    '<td  style=" text-align: center;" >'+ data1.federalAwards + '</td></tr>'+
    '<tr><th class="border_right padding_bottom padding_top">State Awards</th><td  style=" text-align: center;">'+
    data1.stateAwards + '</td></tr>'+
    '<tr><th class="border_right padding_bottom padding_top">Private Awards</th><td  style=" text-align: center;">'+
    data1.privateAwards + '</td></tr>'+
    '<tr><th class="border_right padding_bottom padding_top">Total</th><td  style=" text-align: center;">'+
    data1.awrds_total + '</td></tr>'+
    '</tbody></table></div>'+
    '</br>' +
    '</br>' +

    '<h4>LARGE-SCALE PROPOSALS/AWARDS </h4>'+
    '<div class="annual-budget">' +
    '<h4> Number of target for Large-Scale*, Multi-Investigator Proposals/Awards with Multi-Institutions</h4>'+
    '<table width="100%"><thead><tr><td class="border_bottom border_right" style="width: 25%;">'+
    '</td><th class="border_bottom" width="36.5%">Your Goal for FY 20-21</th></tr></thead>'+
    '<tbody><tr><th class="border_right padding_bottom padding_top">#Proposals</th>'+
    '<td  style=" text-align: center;">'+ data1.proposal + '</td></tr>'+
    '<tr><th class="border_right padding_bottom padding_top">#Awards</th><td  style=" text-align: center;">'+
    data1.lsAwards + '</td></tr>'+
    '</tbody></table></div>'+
    '</br>' +
    '</br>' +



    '<h4>STRR/SBIR PROPOSALS/AWARDS </h4>'+

    '<div class="annual-budget">' +
    '<h4> The target numbers are indicated below: </h4>'+
    '<table width="100%"><thead><tr><td class="border_bottom border_right" style="width: 25%;">'+
    '</td><th class="border_bottom" width="36.5%">Your Goal for FY 20-21</th></tr></thead>'+
    '<tbody><tr><th class="border_right padding_bottom padding_top">#Proposals</th>'+
    '<td  style=" text-align: center;">'+ data1.stProposal + '</td></tr>'+
    '<tr><th class="border_right padding_bottom padding_top">#Awards</th><td  style=" text-align: center;">'+
    data1.stAwards + '</td></tr>'+
    '</tbody></table></div>'+

    '</br>' +
    '</br>' +

    '<h4>PUBLICATIONS </h4>'+
    '<div class="annual-budget">' +
    '<h4>  The target numbers are indicated below:</h4>'+
    '<table width="100%"><thead><tr><td class="border_bottom border_right" style="width: 25%;">'+
    '</td><th class="border_bottom" width="36.5%">Your Goal for FY 20-21</th></tr></thead>'+
    '<tbody><tr><th class="border_right padding_bottom padding_top">Books-Authored/Edited</th>'+
    '<td  style=" text-align: center;">'+ data1.booksAuthored + '</td></tr>'+
    '<tr><th class="border_right padding_bottom padding_top">Books Chapters - Authored/Edited </th><td  style=" text-align: center;">'+
    data1.booksChapters + '</td></tr>'+
    '<tr><th class="border_right padding_bottom padding_top">Publications</th><td  style=" text-align: center;">'+
    data1.publicationsTable + '</td></tr>'+
    '</tbody></table></div>'+
    '</br>' +
    '</br>' +



    '<h4>TECHNOLOGY TRANSFER/COMMERCIALIZATION  </h4>'+

    '<div class="annual-budget">' +
    '<h4> The target numbers are indicated below:</h4>'+
    '<table width="100%"><thead><tr><td class="border_bottom border_right" style="width: 25%;">'+
    '</td><th class="border_bottom" width="36.5%">Your Goal for FY 20-21</th></tr></thead>'+
    '<tbody><tr><th class="border_right padding_bottom padding_top">Intellectual Property Disclosures</th>'+
    '<td  style=" text-align: center;">'+ data1.intellectual + '</td></tr>'+
    '<tr><th class="border_right padding_bottom padding_top">Patents Applications</th><td style=" text-align: center;" >'+
    data1.patentsApplications + '</td></tr>'+
    '<tr><th class="border_right padding_bottom padding_top">Patents Isssued</th><td  style=" text-align: center;">'+
    data1.patentsIssued + '</td></tr>'+
    '<tr><th class="border_right padding_bottom padding_top">Patents Licensed</th><td  style=" text-align: center;">'+
    data1.patentsLicensed + '</td></tr>'+
    '<tr><th class="border_right padding_bottom padding_top">Licenses Executed</th><td  style=" text-align: center;">'+
    data1.licensedExecuted + '</td></tr>'+
    '<tr><th class="border_right padding_bottom padding_top">Licenses Revenue</th><td  style=" text-align: center;">'+
    data1.licensedRevenue + '</td></tr>'+
    '<tr><th class="border_right padding_bottom padding_top">Start-up Companies</th><td  style=" text-align: center;">'+
    data1.startupCompanies + '</td></tr>'+
    '</tbody></table></div>'+
    '</br>' +

    '<h4>CONFERENCE/SEMINAR PRESENTATIONS </h4>'+

    '<div class="annual-budget">' +
    '<h4> The target numbers are indicated below:</h4>'+
    '<table width="100%"><thead><tr><td class="border_bottom border_right" style="width: 25%;">'+
    '</td><th class="border_bottom" width="36.5%">Your Goal for FY 20-21</th></tr></thead>'+
    '<tbody><tr><th class="border_right padding_bottom padding_top">Your Goal for FY 20-21</th>'+
    '<td style=" text-align: center;">'+ data1.goals + '</td></tr>'+

    '</tbody></table></div>'+
    '</br>' +

    '<h4>EDUCATION AND TRAINING </h4>'+

    '<div class="annual-budget">' +
    '<h4>Number of Undergraduate/Graduate/Postdoc Trained.</h4>'+
    '<table width="100%"><thead><tr><td class="border_bottom border_right" style="width: 25%;">'+
    '</td><th class="border_bottom" width="36.5%">#Students - Your Goal for FY 20-21</th></tr></thead>'+
    '<tbody><tr><th class="border_right padding_bottom padding_top">Undergraduate</th>'+
    '<td  style=" text-align: center;">'+ data1.undergraduate + '</td></tr>'+
    '<tr><th class="border_right padding_bottom padding_top">Graduate - Master</th><td  style=" text-align: center;">'+
    data1.graduate_masters + '</td></tr>'+
    '<tr><th class="border_right padding_bottom padding_top">Graduate - PhD</th><td  style=" text-align: center;">'+
    data1.graduate_phd + '</td></tr>'+
    '<tr><th class="border_right padding_bottom padding_top">Postdoctoral</th><td  style=" text-align: center;">'+
    data1.post + '</td></tr>'+
    '</tbody></table></div>'+
    '</br>' ;

    content_research1 += goaldetails2021(reportdata);
    return content_research1;
}

/*Research 19-20*/
function printResearchUnit(year,filename,reportdata_1){

    let year1="";
    let reportdata ="";
    let data = {};
  //  if(year === '19-20'){
    year1 = "FY1920";
    reportdata = JSON.parse(reportdata_1);
    data["unit"] = reportdata.data.ExternalReference;
    reportdata = reportdata.data.FY1920;

    data["mission"] = reportdata.Q31; 
    data["vision"] = reportdata.Q32;
    
    data["annualBudget"] = reportdata.Q41;
    data["employeesState"] = checkNull(reportdata.Q42_1_1); 
    data["employeesRF"] = checkNull(reportdata.Q42_1_2); 
    data["fteState"] = checkNull(reportdata.Q42_2_1); 
    data["fteRF"] = checkNull(reportdata.Q42_2_2); 
    data["nameOfadditionalsource1"] = checkNull(reportdata.Q43_1_1); 
    data["nameOfadditionalsource11"] = checkNull(reportdata.Q43_1_TEXT); 

    data["nameOfadditionalsource2"] = checkNull(reportdata.Q43_2_1); 
    data["nameOfadditionalsource21"] = checkNull(reportdata.Q43_2_TEXT); 

    data["nameOfadditionalsource3"] =checkNull(reportdata.Q43_3_1); 
    data["nameOfadditionalsource31"] = checkNull(reportdata.Q43_3_TEXT); 

    data["total3"] = checkNull(reportdata.Q43_4_1); 
    data["total33"] =checkNull( reportdata.Q43_4_2); 

    addData={};
    data["proposals"] = reportdata.Q51; 
    data["federalApplicationgoals"] = checkNull(reportdata.Q51_1_1); 
    data["federalApplicationactual"] = checkNull(reportdata.Q51_2_1); 
    data["stateApplicationgoals"] = checkNull(reportdata.Q51_1_2); 
    data["stateApplicationactual"] =checkNull(reportdata.Q51_2_2); 

    data["privateApplicationgoals"] = checkNull(reportdata.Q51_1_4); 
    data["privateApplicationactual"] =checkNull( reportdata.Q51_2_4); 

    addData={1:data["federalApplicationgoals"],2: data["stateApplicationgoals"],3: data["privateApplicationgoals"]};
    addData1={1:data["federalApplicationactual"],2: data["stateApplicationactual"],3: data["stateApplicationactual"]};

    data["proposal_total_goals"]=add(addData);
    data["proposal_total_actual"]=add(addData1);

    data["awards"] = reportdata.Q52; 
    data["federalAwardsgoals"] = checkNull(reportdata.Q52_1_1);
    data["federalAwardsactual"] = checkNull(reportdata.Q52_2_1);
    data["stateAwardsgoals"] = checkNull(reportdata.Q52_1_2); 
    data["stateAwardsactual"] =checkNull( reportdata.Q52_2_2); 

    data["privateAwardsgoals"] = checkNull(reportdata.Q52_1_4); 
    data["privateAwardsactual"] = checkNull(reportdata.Q52_2_4); 

    addData2={1:data["federalAwardsgoals"],2: data["stateAwardsgoals"],3: data["privateAwardsgoals"]};
    addData3={1:data["federalAwardsactual"],2: data["stateAwardsactual"],3: data["privateAwardsactual"]};

    data["awrds_total_goals"]=add(addData2);
    data["awrds_total_actual"]=add(addData3);
    
    data["largeScale"] = checkNull(reportdata.Q53); 
    data["proposal_goals"] = checkNull(reportdata.Q53_1_1);
    data["proposal_actual"] = checkNull(reportdata.Q53_1_2);
    data["lsAwards_goals"] = checkNull(reportdata.Q53_2_1); 
    data["lsAwards_actual"] = checkNull(reportdata.Q53_2_2); 
    
    data["strr"] = checkNull(reportdata.Q54);

    data["stProposal_goals"] = checkNull(reportdata.Q54_1_1); 
    data["stProposal_actual"] = checkNull(reportdata.Q54_1_2); 

    data["stAwards_goals"] = checkNull(reportdata.Q54_2_1); 
    data["stAwards_actual"] = checkNull(reportdata.Q54_2_2); 
    //detailed research

    data["publications"] = checkNull(reportdata.Q61); 
    data["booksAuthoredgoals"] = checkNull(reportdata.Q61_1_1); 
    data["bookauthoredsactual"] = checkNull(reportdata.Q61_1_2); 

    data["bookschaptersgoals"] = checkNull(reportdata.Q61_2_1); 
    data["bookschapteractual"] = checkNull(reportdata.Q61_2_2);

    data["publicationsgoals"] = checkNull(reportdata.Q61_3_1); 
    data["publicationsactual"] = checkNull(reportdata.Q61_3_2); 
    data["listofpublications"]=checkNull(reportdata.Q62);

    data["intellctualgoals"]=checkNull(reportdata.Q63_1_1);
    data["intellctualactual"]=checkNull(reportdata.Q63_1_2);

    data["patnetsgoals"]=checkNull(reportdata.Q63_2_1);
    data["patentsactual"]=checkNull(reportdata.Q63_2_2);
    data["patlicenesedlgoals"]=checkNull(reportdata.Q63_3_1);
    data["patlicensedactual"]=checkNull(reportdata.Q63_3_2);

    data["patlicgoals"]=checkNull(reportdata.Q63_4_1);
    data["patlicactuals"]=checkNull(reportdata.Q63_4_2);

    data["licensedexecutedgoals"]=checkNull(reportdata.Q63_5_1);
    data["licensedexecutedactual"]=checkNull(reportdata.Q63_5_2);

    data["licensedrevenuegoals"]=checkNull(reportdata.Q63_6_1);
    data["licensedrevenueactual"]=checkNull(reportdata.Q63_6_2);

    data["startupcompaniesgoals"]=checkNull(reportdata.Q63_7_1);
    data["starupcomapnieseactual"]=checkNull(reportdata.Q63_7_2);

    data["listofintelletual"]=checkNull(reportdata.Q64);

    data["yougoaloffy19020"]=checkNull(reportdata.Q65_1);
    data["actualnumbers"]=checkNull(reportdata.Q65_2);
    data["listofkeynote"]=checkNull(reportdata.Q66);
    data["otheracctiites"]=checkNull(reportdata.Q66);

    data["educationandtraining"] = checkNull(reportdata.Q71); 
    data["students_goals_undergraduate"] =checkNull(reportdata.Q71_1_1);
    data["students_goals_graduate"] =checkNull(reportdata.Q71_1_2);
    data["students_goals_graduate_phd"] =checkNull(reportdata.Q71_1_4);
    data["students_goals_phd"] =checkNull(reportdata.Q71_1_5);

    data["students_actual_undergraduate"] =checkNull(reportdata.Q71_2_1);
    data["students_actual_graduate"] =checkNull(reportdata.Q71_2_2);
    data["students_actual_gradaute_phd"] =checkNull(reportdata.Q71_2_4);
    data["students_actual_phd"] =checkNull(reportdata.Q71_2_5);

    data["nature_of_mentoring_undergradudate"] =checkNull(reportdata.Q71_3_1);
    data["nature_of_mentoring_graduate"] =checkNull(reportdata.Q71_3_2);
    data["nature_of_mentoring_gradaute_phd"] =checkNull(reportdata.Q71_3_4);
    data["nature_of_mentoringl_phd"] =checkNull(reportdata.Q71_3_5); 
    data["noofpartners"]= reportdata.Q141;
    if(reportdata.hasOwnProperty("partners"))
        data["partners"]= reportdata.partners;
    let content_research='';
    content_research = '<h1 style="text-align: center;">'+ data.unit +'</h1><div style="margin-botton:30px;"></div><h1 style="text-align: center;">Annual Report (2019-2020)</h1>';
    content_research += '<h4>MISSION</h4>'+
    '<p class="mission">'+ data.mission + '</p>' +
    '<h4>VISION</h4>'+
    '<p class="vision">'+ data.vision + '</p>' +

    '<h4> ANNUAL BUDGET </h4>'+
    '<div class="annual-budget"><p>'+ data.annualBudget + '</p>' +
    '<h4> Number of State and RF Employees/FTEs.</h4>'+
    '<table width="100%"><thead><tr><td class="border_bottom border_right" style="width: 25%;"></td>'+
    '<th class="border_bottom" width="36.5%">State</th><th class="border_bottom" width="36.5%">RF</th></tr></thead>'+
    '<tbody><tr>'+
    '<th class="border_right padding_bottom padding_top">#Employees (Headcounts)</th><td style=" text-align: center;">'+ data.employeesState + '</td><td style=" text-align: center;">'+
    data.employeesRF + '</td></tr>'+
    '<tr><th class="border_right">#FTEs</th><td style=" text-align: center;">'+ data.fteState + '</td><td style=" text-align: center;">'+
    data.fteRF + '</td></tr>'+
    '</tbody></table></div>' +
    '</br>' +
    '</br>' +
            
    '<div class="annual-budget"> ' +
    '<h4> Source of Other Revenue Generated</h4>'+
    '<table width="100%"><thead><tr><td class="border_bottom border_right" style="width: 25%;"></td>'+
    '<th class="border_bottom" width="36.5%">Your Goal in FY 19-20</th><th class="border_bottom" width="36.5%">Actual Number</th></tr></thead>'+
    '<tbody><tr>'+
    '<th class="border_right padding_bottom padding_top">Name of Additional Source 1 </th><td style=" text-align: center;">'+ data.nameOfadditionalsource1 + '</td><td style=" text-align: center;">'+
    data.nameOfadditionalsource11 + '</td></tr>'+
    '<tr><th class="border_right">Name of Additional Source 2</th><td style=" text-align: center;">'+ data.nameOfadditionalsource2 + '</td><td style=" text-align: center;">'+
    data.nameOfadditionalsource21 + '</td></tr>'+
    '<th class="border_right padding_bottom padding_top">Name of Additional Source 3 </th><td style=" text-align: center;">'+ data.nameOfadditionalsource3 + '</td><td style=" text-align: center;">'+
    data.nameOfadditionalsource31 + '</td></tr>'+
    '<th class="border_right padding_bottom padding_top">Total </th><td style=" text-align: center;">'+ data.total3 + '</td><td style=" text-align: center;">'+
    data.total33 + '</td></tr>'+
    '</tbody></table></div>' +

    '<h4> PUBLICATIONS </h4>'+
    '<div class="annual-budget">' +
    '<h4>Number of Publications by Center/Institute/Lab in the past FY</h4>'+
    '<table width="100%"><thead><tr><td class="border_bottom border_right" style="width: 25%;"></td>'+
    '<th class="border_bottom" width="36.5%">Your Goal in FY 19-20</th><th class="border_bottom" width="36.5%">Actual Number</th></tr></thead>'+
    '<tbody><tr>'+
    '<th class="border_right padding_bottom padding_top">Books Authored/Edited </th><td style=" text-align: center;">'+ data.booksAuthoredgoals + '</td><td style=" text-align: center;">'+
    data.bookauthoredsactual + '</td></tr>'+
    '<tr><th class="border_right  padding_bottom padding_top">Books Chapters Authored/Edited  </th><td style=" text-align: center;">'+ data.bookschaptersgoals + '</td><td style=" text-align: center;">'+
    data.bookschapteractual + '</td></tr>'+
    
    '<tr><th class="border_right padding_bottom padding_top ">Publications</th><td style=" text-align: center;">'+ data.publicationsgoals + '</td><td style=" text-align: center;">'+
    data.publicationsactual + '</td></tr>'+
    
    '</tbody></table></div>' +
    '</br>'+
    '</br>'+    
    '<h4>List of Publication by Center/Institute/Lab in the past FY</h4>'+
    '<div class="annual-budget">' +formatPara(data.listofpublications)  +
    '</div>'+
    '</br>'+
    '</br>'+
    
    '<h4> TECHNOLOGY TRANSFER/COMMERCIALIZATION </h4>'+
    '<div class="annual-budget">' +
    '<h4>Number of Intellectual Property/Technology Transfer/Commercialization in the Past FY </h4>'+
    '<table width="100%"><thead><tr><td class="border_bottom border_right" style="width: 25%;"></td>'+
    '<th class="border_bottom" width="36.5%">Your Goal in FY 19-20</th><th class="border_bottom" width="36.5%">Actual Number</th></tr></thead>'+
    '<tbody><tr>'+
    '<th class="border_right padding_bottom padding_top">Intellectual Property Disclosures </th><td style=" text-align: center;">'+ data.intellctualgoals + '</td><td style=" text-align: center;">'+
    data.intellctualgoals + '</td></tr>'+
    '<tr><th class="border_right  padding_bottom padding_top">Patents Applications </th><td style=" text-align: center;">'+ data.patentsactual + '</td><td style=" text-align: center;">'+
    data.patnetsgoals + '</td></tr>'+
    '<th class="border_right padding_bottom padding_top">Patents Issued  </th><td style=" text-align: center;">'+ data.patlicenesedlgoals + '</td><td style=" text-align: center;">'+
    data.patlicenesedlgoals + '</td></tr>'+
    '<th class="border_right padding_bottom padding_top">Patents Licensed </th><td style=" text-align: center;">'+ data.patlicgoals+ '</td><td style=" text-align: center;">'+
    data.patlicactuals + '</td></tr>'+
    '<th class="border_right padding_bottom padding_top">License Executed </th><td style=" text-align: center;">'+ data.licensedexecutedgoals+ '</td><td style=" text-align: center;">'+
    data.licensedexecutedactual + '</td></tr>'+
    '<th class="border_right padding_bottom padding_top">License Revenue </th><td style=" text-align: center;">'+ data.licensedrevenuegoals+ '</td><td style=" text-align: center;">'+
    data.licensedrevenueactual + '</td></tr>'+
    '<th class="border_right padding_bottom padding_top">Start-up Companies </th><td style=" text-align: center;">'+ data.startupcompaniesgoals+ '</td><td style=" text-align: center;">'+
    data.starupcomapnieseactual + '</td></tr>'+
    '</tbody></table></div>'  +
    '</br>'+
    '</br>'+
    '<h4>List of Intellectual Property/Technology Transfer/Commercialization in the Past FY </h4>'+
    '<div class="partners"><p>Total No of Partners: ' + data.noofpartners +'</p>';
    let partners = data.hasOwnProperty("partners")? data["partners"]: [];
    if(partners.length > 0)
    {
        content_research += '<table class="table thead-dark table-hover">'+
                    '<thead><tr>'+
                    '<th scope="col">#</th>'+
                    '<th scope="col">Details</th>'+
                    '</tr></thead>'+
                    '<tbody>';
        var i = 0;
        partners.forEach(element => {
            i++;
            content_research +=  '<tr><th scope="row">'+ i +'</th>'+
                        '<td><p>Full Name : '+ element["FullName"]+'<br/>';
                    if(element.hasOwnProperty("JobTitle") && element["JobTitle"] != '')  
                        content += 'Job Title : '+ element["JobTitle"]+'<br/>';     
                    if(element.hasOwnProperty("Department") && element["Department"] != '')  
                        content += 'Department : '+ element["Department"]+'<br/>';   
                    if(element.hasOwnProperty("School") && element["School"] != '')  
                        content += 'School : '+ element["School"]+'<br/>'; 
                    if(element.hasOwnProperty("Organization(IfnotUAlbany)") && element["Organization(IfnotUAlbany)"] != '')  
                        content += 'Organization : '+ element["Organization(IfnotUAlbany)"]+'<br/>'; 
                    if(element.hasOwnProperty("Email") && element["Email"] != '')  
                        content += 'Email : <a href="mailto:'+ element["Email"]+'">'+ element["Email"]+'</a></td>';
            content_research += '</tr>';
        });
        content_research += '</tbody></table>';
    }
    content_research +='</div>'+
    '<br/>' +
    '<br/>' +
    '<h4> CONFERENCE/SEMINAR PRESENTATIONS</h4>'+
    '<div class="annual-budget">' +
    '<h4> Numbers of all Keynote Address or Plenary Invited Presentations</h4>'+
    '<table width="100%">'+
    '<tbody><tr>'+
    '<th class="padding_bottom padding_top">Your Goals for FY 19-20 </th><td style=" text-align: center;">'+ data.yougoaloffy19020 + '</td></tr>'+
    '<tr><th class="">Actual Numbers </th><td style=" text-align: center;">'+ data.actualnumbers + '</td>'+
    '</tbody></table></div>' +
    '<br/>' +
    '<br/>' +
    '<h4> List of  all Keynote Address or Plenary Invited Presentations </h4>'+
    '<div class="annual-budget"><p>' +formatPara(data.listofkeynote) + '</p>' +
    '</div>'+
    '<br/>' +
    '<br/>' +
    '<h4> OTHER ACTIVITIES</h4>'+
    '<h4> List of other Scholarly Activity </h4>'+
    
    '<div class="annual-budget"><p>'+ formatPara(data.otheracctiites) +'</p>' +
    '</div>' +
    
    '<h4> EDUCATION AND TRAINING </h4>'+
    '<div class="annual-budget">' +
    '<h4> Number of Undergraduate/Graduate/Postdoc Trained.</h4>'+
    '<table width="100%"><thead><tr><td class="border_bottom border_right" style="width: 25%;"></td><th class="border_bottom" width="25%">Undergraduate</th>'+
    '<th class="border_bottom" width="25%">Graduate - Master </th>'+
    '<th class="border_bottom" width=25%">Graduate - PhD </th>'+
    '<th class="border_bottom" width="25%">Postdoctoral </th>'+
    '</tr></thead>'+
    '<tbody><tr><th class="border_right padding_bottom padding_top">#Students - Your Goal for FY 19-20</th><td style=" text-align: center;">'+ data.students_goals_undergraduate + '</td>'+
    '<td style=" text-align: center;">'+data.students_goals_graduate+ '</td> '+    
    '<td style=" text-align: center;">'+data.students_goals_graduate_phd+ '</td> '+    

    '<td style=" text-align: center;">'+data.students_goals_phd+ '</td> '+    

    '</tr>'+

    '<tr><th class="border_right padding_bottom padding_top">#Students - Actual Numbers</th><td style=" text-align: center;">'+ data.students_actual_undergraduate + '</td>'+
    '<td style=" text-align: center;">'+data.students_actual_graduate+ '</td> '+    
    '<td style=" text-align: center;">'+data.students_actual_gradaute_phd+ '</td> '+    

    '<td style=" text-align: center;">'+data.students_goals_phd+ '</td> '+    

    '</tr>'+


    '<tr><th class="border_right padding_bottom padding_top"> Nature of Mentoring</th><td style=" text-align: center;">'+ data.nature_of_mentoring_undergradudate + '</td>'+
    '<td style=" text-align: center;">'+data.nature_of_mentoring_graduate+ '</td> '+    
    '<td style=" text-align: center;">'+data.nature_of_mentoring_gradaute_phd+ '</td> '+    

    '<td style=" text-align: center;">'+data.nature_of_mentoringl_phd+ '</td> '+    

    '</tr>'+
    '</tbody></table></div>';
    content_research += goaldetails(reportdata);
    return  content_research;
}

    /* Adminstration 20- 21*/

    function printadminhUnit20(year,filename,reportdata_1){


        let year1="";
        let reportdata ="";
        let data = {};
          
        year1 = "FY2021";

        reportdata =   JSON.parse(reportdata_1);
        data["unit"] = reportdata.data.ExternalReference
        reportdata = reportdata.data.FY2021;
        let content = '';
        data["mission"] = reportdata.Q31; 
        data["vision"] = reportdata.Q32;        
        data["annualBudget"] = reportdata.Q41;
        data["employeesState"] = reportdata.Q42_1_1; 
        data["employeesRF"] = reportdata.Q42_1_2; 
        data["fteState"] = reportdata.Q42_2_1; 
        data["fteRF"] = reportdata.Q42_2_2; 


        content = '<h1 style="text-align: center;">'+ data.unit +'</h1><div style="margin-botton:30px;"></div><h1 style="text-align: center;">Planning Report (2020-2021)</h1>'+
        '<h4>MISSION</h4>'+
        '<p class="mission">'+ data.mission + '</p>' +
        '<h4>VISION</h4>'+
        '<p class="vision">'+ data.vision + '</p>' +

        '<h4> ANNUAL BUDGET </h4>'+
        '<div class="annual-budget"><p>'+ data.annualBudget + '</p>' +
        '<h4> Indicate below, the number of State and RF Employees/FTEs.</h4>'+
        '<table width="100%"><thead><tr><td class="border_bottom border_right" style="width: 25%;"></td><th class="border_bottom" width="36.5%">State</th><th class="border_bottom" width="36.5%">RF</th></tr></thead>'+
        '<tbody><tr><th class="border_right padding_bottom padding_top">#Employees (Headcounts)</th><td style=" text-align: center;">'+ data.employeesState + '</td><td style=" text-align: center;">'+
        data.employeesRF + '</td></tr>'+'<tr><th class="border_right">#FTEs</th><td style=" text-align: center;">'+ data.fteState + '</td><td style=" text-align: center;">'+
        data.fteRF + '</td></tr></tbody></table></div>';

        content += goaldetails2021_admi(reportdata);
        return content;
    }

    /* */

    function printadminhUnit19 (year,filename,reportdata_1){
    let year1="";
    let reportdata ="";
    let data2 = {};

    year1 = "FY1920";
    reportdata = JSON.parse(reportdata_1);
    data2["unit"] =  reportdata.data.ExternalReference;
    reportdata = reportdata.data.FY1920;
    data2["mission"] = reportdata["1819Mission"]; 
    data2["vision"] = reportdata["1819Vision"];
     
    data2["annualBudget"] = reportdata.Q41;
    data2["employeesState"] = reportdata.Q42_1_1; 
    data2["employeesRF"] = reportdata.Q42_1_2; 
    data2["fteState"] = reportdata.Q42_2_1; 
    data2["fteRF"] = reportdata.Q42_2_2; 
    let content ='';
    content = '<h1 style="text-align: center;">'+ data2.unit +'</h1><div style="margin-botton:30px;"></div><h1 style="text-align: center;">Annual Report (2019-2020)</h1>'+
    '<h4>MISSION</h4>'+
    '<p class="mission">'+ data2.mission + '</p>' +
    '<h4>VISION</h4>'+
    '<p class="vision">'+ data2.vision + '</p>'+

    '<h4> ANNUAL BUDGET </h4>'+
    '<div class="annual-budget"><p>'+ data2.annualBudget + '</p>' +
    '<h4> Indicate below, the number of State and RF Employees/FTEs.</h4>'+
    '<table width="100%"><thead><tr><td class="border_bottom border_right" style="width: 25%;"></td><th class="border_bottom" width="36.5%">State</th><th class="border_bottom" width="36.5%">RF</th></tr></thead>'+
    '<tbody><tr><th class="border_right padding_bottom padding_top">#Employees (Headcounts)</th><td style=" text-align: center;">'+ data2.employeesState + '</td><td style=" text-align: center;">'+
    data2.employeesRF + '</td></tr>'+'<tr><th class="border_right">#FTEs</th><td style=" text-align: center;">'+ data2.fteState + '</td><td style=" text-align: center;">'+
    data2.fteRF + '</td></tr></tbody></table></div><br>';

    content +=goaldeatils19_admi(reportdata);
    return content; 
    }
   



let checkNull =function(value){

    if(typeof value === "undefined" || value === ""){
        return 'N/A';
    }
    else{
        return value;
    }
}


let add =function(value){
    var sum=0;

    for(var i=1;i<=Object.keys(value).length;i++){

        sum += value[i];
    }
    return sum;
}


let formatPara = function(text){
    let result = '';
    if(typeof text === "undefined"){

    }
    else{
    let paras = text.split("\n\n");
    for(var i=0; i< paras.length; i++){
        let para = paras[i];

            let lines = para.split(/\n(?=\d |\d.\t|[1-9]\d([0-9]\d){0,2}| \d.\t|\r\n|•\t|i\.|ii\.|iii\.|iv\.|v\.)/);
          
           
                for(var j =0; j< lines.length; j++)
                {
                    if(lines[j] == '' || typeof lines[j] === "undefined") continue;
                    result += '<p>'+lines[j]+'</p>'; 
                }
            
        }        
    }



    return result;
}

let goaldetails= function (reportdata){

    let content ='';
for(var i = 9; i < 14; i++)
    {
      ids = getIds('FY1920');
        let goal = new GoalPlan(i-8, reportdata["Q"+i+"1"], reportdata["Q"+i+"2"], 
        reportdata["Q"+i+"3"], reportdata["Q"+i+"4"], reportdata["Q"+i+"5"], 
        reportdata["Q"+i+"6"], reportdata["Q"+i+"7"], reportdata["Q"+i+"8"]);
        content += addSmartGoal(goal);
    }

    data = [];
    if(reportdata.Q81_4 != '')
        data.push(reportdata.Q81_4);
    if(reportdata.Q81_5 != '')
        data.push(reportdata.Q81_5);
    if(reportdata.Q81_6 != '')
        data.push(reportdata.Q81_6);
    
    content += addTopAchievements(data);


    
    data = {};
    data["opportunities"] = reportdata.Q151;
    data["challenges"] = reportdata.Q152;
    data["needs"] = reportdata.Q153;
    data["strategies"] = reportdata.Q154;
    data["suggestions"] = reportdata.Q155;
    content += addOtherThoughts( data);


    return content;

}
let goaldetails2021_admi = function(reportdata){

let content ='';

    for(var i = 6; i < 11; i++)
    {
        let goal = new GoalPlan(i-5, reportdata["Q"+i+"1"], reportdata["Q"+i+"2"], 
        reportdata["Q"+i+"3"], reportdata["Q"+i+"4"], reportdata["Q"+i+"5"], 
        reportdata["Q"+i+"6"], reportdata["Q"+i+"7"], reportdata["Q"+i+"8"]);
        content += addSmartGoalPlan2021( goal);
    }

    return content;
}

let goaldetails2021 =function(reportdata){

let content ='';
    
    for(var i = 7; i < 12; i++)
    {
       
        let goal = new GoalPlan(i-6, reportdata["Q"+i+"1"], reportdata["Q"+i+"2"], 
        reportdata["Q"+i+"3"], reportdata["Q"+i+"4"], reportdata["Q"+i+"5"], 
        reportdata["Q"+i+"6"], reportdata["Q"+i+"7"], reportdata["Q"+i+"8"]);
        content += addSmartGoalPlan2021( goal);

}

return content;

}

let goaldeatils19_admi = function(reportdata){

let content = '';
let data= {};
if( reportdata.Q51 == 'Yes')
{
   
    for(var i=1; i < 7; i++ )
    {
        data['membership' + i] =  reportdata["Q52_" + i];
    }
    content += addOrganizationalMemberships( data);
    
   
    for(var i=1; i < 7; i++ )
    {
        data['benifit' + i] =  reportdata["Q61_" + i];
    }
    content += addMembershipBenifits( data);
}

for(var i = 8; i < 13; i++)
{
    if(i > 10 && reportdata.Q105 === 'No')
    {
        break;
    }
    let no = i-7;
    let goal = new Goal(no, reportdata["1819Goal"+no], reportdata["1819Activities"+no], 
    reportdata["1819Metrics"+no], reportdata["1819Timeframe"+no], reportdata["Q"+i+"2"], reportdata["Q"+i+"3"], reportdata["Q"+i+"4"]);
    content += addSmartGoal(goal);
}

data = [];
if(reportdata.Q131_8 != '')
    data.push(reportdata.Q83);
if(reportdata.Q131_9 != '')
    data.push(reportdata.Q93);
if(reportdata.Q131_13 != '')
    data.push(reportdata.Q103);
if(reportdata.Q131_11 != '')
    data.push(reportdata.Q113);
if(reportdata.Q131_12 != '')
    data.push(reportdata.Q123);
if(reportdata.Q132_4 != '')
    data.push(reportdata.Q132_4);
if(reportdata.Q132_5 != '')
    data.push(reportdata.Q132_5);
if(reportdata.Q132_6 != '')
    data.push(reportdata.Q132_6);
content += addTopAchievements( data);

data["opportunities"] = reportdata.Q141;
data["challenges"] = reportdata.Q142;
data["needs"] = reportdata.Q143;
data["strategies"] = reportdata.Q144;
data["suggestions"] = reportdata.Q145;
content += addOtherThoughts( data);






return content;


}

let addSmartGoalPlan2021 = function(goal)
{
    let smartgoal = '<h4>FY 20-21 SMART GOAL '+ goal.no +'</h4>';
    smartgoal += '<div class="goal"><p><b>Goal: </b>'+ (goal.goal == ''?'N/A': formatText(goal.goal)) +'</p>';
    smartgoal += "<p><b>Action(s): </b>"+ (goal.action == ''?'N/A':goal.action) +'</p>';
    smartgoal += "<p><b>Metric(s): </b>"+ (goal.metric == ''?'N/A':goal.metric) +'</p>';
    let time = (isNaN(goal.timeFrame) || goal.timeFrame == '') ? (goal.timeFrame == ''?'N/A':goal.timeFrame) : getDate(goal.timeFrame);
    smartgoal += "<p><b>Time Frame: </b>"+ time +'</p>';
    smartgoal += '<p><b>Primary Leader on this Project: </b>'+ (goal.primaryLeader == ''?'N/A':goal.primaryLeader) +'</p>';
    smartgoal += '<p><b>Circumstances That Could Impact Workplan: </b>'+ (goal.circumstances == ''?'N/A':goal.circumstances) +'</p>';
    smartgoal += '<p><b>Most Important Collaborating Units/Offices: </b>'+ (goal.collaborations == ''?'N/A':goal.collaborations) +'</p>';
    smartgoal += '<p><b>Impact on Research Excellence (Campus Strategic Priorities): </b>'+ (goal.impact == ''?'N/A':goal.impact) +'</p>';
    return smartgoal;
}


let addOrganizationalMemberships = function( data)
{
    let organizations = '<ul class="num-list">';
    for(var i=1; i<7; i++)
    {
        if(data['membership'+i]!= "")
            organizations +='<li>'+ data['membership'+i] +'</li>';
    }
    organizations +='</ul>';
    return organizations;

}


let addMembershipBenifits = function( data)
{
    let membershipBenefit = '<ul class="num-list">';
    for(var i=1; i<7; i++)
    {
        if(data['benefit'+i]!= "")
            membershipBenefit +='<li>'+ data['benefit'+i] +'</li>';
    }
    membershipBenefit +='</ul>';
    return  membershipBenefit;
}



class Goal{
    constructor(no, goal, action, metric, timeframe, actionsImplemented, results, changes){
        this.no = no;
        this.goal = goal;
        this.action = action;
        this.metric = metric;
        this.timeFrame = timeframe;
        this.actionsImplemented = actionsImplemented;
        this.results = results;
        this.changes = changes;
    }
}

class GoalPlan{
    constructor(no, goal, action, metric, timeframe, primaryLeader, circumstances, collaborations, impact){
        this.no = no;
        this.goal = goal;
        this.action = action;
        this.metric = metric;
        this.timeFrame = timeframe;
        this.primaryLeader = primaryLeader;
        this.circumstances = circumstances;
        this.collaborations = collaborations;
        this.impact = impact;
    }
}



let addSmartGoal = function( goal)
{
    let smartgoal = '<h4>FY 19-20 SMART GOAL '+ goal.no +'</h4>';
    smartgoal += '<div class="goal"><p><b>Goal: </b>'+ (goal.goal == ''?'N/A': formatText(goal.goal)) +'</p> </div>';
   /*  smartgoal += "<p><b>Action(s): </b>"+ (goal.action == ''?'N/A':formatText(goal.action)) +'</p>';
    smartgoal += "<p><b>Metric(s): </b>"+ (goal.metric == ''?'N/A':formatText(goal.metric)) +'</p>';
    let time = (isNaN(goal.timeFrame) || goal.timeFrame == '') ? (goal.timeFrame == ''?'N/A':goal.timeFrame) : getDate(goal.timeFrame);
    smartgoal += "<p><b>Time Frame: </b>"+ time +'</p> */;
    smartgoal += '<div class="goalresult"><p><b>Actions Implemented: </b>'+ (goal.action == ''?'N/A':formatText(goal.action)) +'</p>';
    smartgoal += '<p><b>Noteworthy Results of Assessment: </b>'+ (goal.metric == ''?'N/A':formatText(goal.metric)) +'</p>';
    smartgoal += '<p><b>Changes Made/Planned: </b>'+ (goal.timeFrame == ''?'N/A':formatText(goal.timeFrame)) +'</p></div>';
    return smartgoal;
}

let addTopAchievements = function(data)
{
let achievements = '<div class="achievements">';
for(var i=0; i<data.length; i++)
{
    achievements += '<p><b>Achievement '+ (i+1)+': </b><p>';
    achievements += formatText(data[i]);
}
achievements += "</div>";
return achievements;

}

let addOtherThoughts = function(data)
{
    let otherthoughts = '<div class="other-thoughts"><p><b>Big Opportunities: </b>'+ (data.opportunities == ''?'N/A':data.opportunities) + '</p>'+
    '<p><b>Big Challenges: </b>'+ (data.challenges == ''?'N/A':data.challenges) +'</p>'+
    '<p><b>Resource Needs: </b>'+ (data.needs == ''?'N/A':data.needs) +'</p>'+
    '<p><b>Strategy Suggestions to Grow Research: </b>'+ (data.strategies == ''?'N/A':data.strategies) +'</p>'+
    '<p><b>Other Thoughts and Suggestions: </b>'+ (data.suggestions == ''?'N/A':data.suggestions) +'</p></div>';
    return otherthoughts;

}



let formatText = function(text){
    let result = '';
    if(typeof text === "undefined"){

    }
    else{
    let paras = text.split("\n\n");
    for(var i=0; i< paras.length; i++){
        let para = paras[i];
        if(para.includes("\n") == false && para.search(/d.\t/) == -1)
        {
            result += para;
        }
        else
        {
            let lines = para.split(/\n(?=\d. |\d.\t| \d.\t|\r\n|•\t|i\.|ii\.|iii\.|iv\.|v\.)/);
            if(lines.length == 1)
            {
                result += lines[0]; 
            }
            else
            {
                for(var j =0; j< lines.length; j++)
                {
                    if(lines[j] == '') continue;
                    result += '<p>'+lines[j]+'</p>'; 
                }
            }
        }        
    }
}

return result;
}