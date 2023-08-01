//Professor me perdoa, mas queria testar se é possivel

//#region Importações do html
var cssAll = document.querySelector('*');
var cssBody = document.querySelector('body');
var cssContainer = document.querySelector('.container');
var cssFormsBox = document.querySelector('.forms-box');
var cssForms = document.querySelector('.forms');
var cssFormsHeader = document.querySelector('.forms-header');
var cssFormsContent = document.getElementsByClassName('forms-content');
var cssFormsLabel = document.getElementsByClassName('forms-label');
var cssFormsInput = document.getElementsByClassName('forms-input');
var cssFormsSubmit = document.querySelector('.forms-submit');
var screenSize = window.matchMedia("(max-width: 700px)");
//#endregion

//#region VariaveisDasCores
colorLightBlue1 = '#79bbe7';
colorWhite1 = '#fafafa';
colorWhite2 = '#ffffff';
colorGray1 = '#555555';
colorGray2 = '#81818193';
colorGray3 = '#292929'
colorCyan1 = '#5583a1';
colorPink1 = '#ff579d';
colorPink2 = '#c4427899'
//#endregion

//#region CssALL
cssAll.style.margin = '0';
cssAll.style.padding = '0';
cssAll.style.boxSizing = 'border-box';
//#endregion

//#region body
    cssBody.style.backgroundColor = colorLightBlue1;
//#endregion

//#region CssContainer
cssContainer.style.height = '100%'
cssContainer.style.minHeight = '90vh';
cssContainer.style.display = 'flex';
cssContainer.style.justifyContent = 'center';
cssContainer.style.alignItems = 'center'
//#endregion

//#region CssFormBox
cssFormsBox.style.backgroundColor = colorWhite1;
cssFormsBox.style.height = 'fit-content';
cssFormsBox.style.width = 'fit-content';
cssFormsBox.style.padding = '0em 2em 0em 2em';
cssFormsBox.style.display = 'flex';
cssFormsBox.style.borderRadius = '0.8em';
cssFormsBox.style.boxShadow = '0.5em 0.5em 1em' + colorCyan1;
cssFormsBox.style.justifyContent = 'center';
cssFormsBox.style.alignItems = 'center';
//#endregion

//#region CssFormsHeader
cssFormsHeader.style.alignSelf = 'center';
cssFormsHeader.style.paddingRight = '9em';
cssFormsHeader.style.fontSize = '1.5em';
cssFormsHeader.style.color = colorGray1;
//#endregion

//#region CssForms
cssForms.style.display = 'flex';
cssForms.style.flexDirection = 'column';
cssForms.style.justifyContent = 'center';
cssForms.style.alignItems = 'center';
cssForms.style.height = '100%';
cssForms.style.width = '100%';
//#endregion

//#region CssFormsSubmit
cssFormsSubmit.style.marginBottom = '1.5em';
cssFormsSubmit.style.width = '20em';
cssFormsSubmit.style.height = '2.5em';
cssFormsSubmit.style.minHeight = '2.5em';
cssFormsSubmit.style.fontSize = '0.9em';
cssFormsSubmit.style.border = 'none'
cssFormsSubmit.style.borderRadius = '0.6em';
cssFormsSubmit.style.boxShadow = ' 0.4em 0.4em 1em 0.001em' + colorPink2;
cssFormsSubmit.style.backgroundColor = colorPink1;
cssFormsSubmit.style.color = colorWhite2;
//#endregion

//#region CssFormsContent
for (var i = 0; i < cssFormsContent.length; i++) {
    cssFormsContent[i].style.height = '1.5em';
}
//#endregion

//#region CssFormLabel
for (var i = 0; i < cssFormsLabel.length; i++) {
    cssFormsLabel[0].style.paddingRight = '12em';
    cssFormsLabel[1].style.paddingRight = '14.5em';
    cssFormsLabel[i].style.color = colorGray3;
    cssFormsLabel[i].style.fontSize = '1.1em';
}
//#endregion

//#region CssFormsInput
for (var i = 0; i < cssFormsInput.length; i++) {
    cssFormsInput[i].style.marginBottom = '2em';
    cssFormsInput[i].style.width = '20em';
    cssFormsInput[i].style.height = '2.4em';
    cssFormsInput[i].style.border = '0.1rem solid' + colorGray2;
    cssFormsInput[i].style.borderRadius = '0.4em';
    cssFormsInput[i].style.fontSize = '0.9em';
}
//#endregion

function Responsividade(screenSize) {
    if (window.innerWidth <= 700) {
        cssFormsBox.style.height = 'fit-content';
        cssFormsBox.style.width = 'fit-content';
        cssFormsHeader.style.fontSize = '0.9em';
        cssFormsSubmit.style.width = '15em';
        cssFormsSubmit.style.height = '2.5em';
        cssFormsSubmit.style.minHeight = '2.5em';
        cssFormsSubmit.style.fontSize = '0.6em';
        for (var i = 0; i < cssFormsContent.length; i++) {
            cssFormsContent[i].style.height = '1.5em';
        }
        for (var i = 0; i < cssFormsLabel.length; i++) {
            cssFormsLabel[0].style.paddingRight = '8em';
            cssFormsLabel[1].style.paddingRight = '11em';
            cssFormsLabel[i].style.color = colorGray3;
            cssFormsLabel[i].style.fontSize = '0.7em';
        }
        for (var i = 0; i < cssFormsInput.length; i++) {
            cssFormsInput[i].style.marginBottom = '1em';
            cssFormsInput[i].style.width = '15em';
            cssFormsInput[i].style.height = '1.4em';
            cssFormsInput[i].style.border = '0.1rem solid' + colorGray2;
            cssFormsInput[i].style.borderRadius = '0.4em';
            cssFormsInput[i].style.fontSize = '0.6em';
        }
        console.log('one ')
    } else{
        cssFormsBox.style.height = 'fit-content';
        cssFormsBox.style.width = 'fit-content';
        cssFormsHeader.style.fontSize = '1.5em';
        cssFormsSubmit.style.width = '20em';
        cssFormsSubmit.style.height = '2.5em';
        cssFormsSubmit.style.minHeight = '2.5em';
        cssFormsSubmit.style.fontSize = '0.9em';
        for (var i = 0; i < cssFormsContent.length; i++) {
            cssFormsContent[i].style.height = '1.5em';
        }
        for (var i = 0; i < cssFormsLabel.length; i++) {
            cssFormsLabel[0].style.paddingRight = '12em';
            cssFormsLabel[1].style.paddingRight = '14.5em';
            cssFormsLabel[i].style.color = colorGray3;
            cssFormsLabel[i].style.fontSize = '1.1em';
        }
        for (var i = 0; i < cssFormsInput.length; i++) {
            cssFormsInput[i].style.marginBottom = '2em';
            cssFormsInput[i].style.width = '20em';
            cssFormsInput[i].style.height = '2.4em';
            cssFormsInput[i].style.border = '0.1rem solid' + colorGray2;
            cssFormsInput[i].style.borderRadius = '0.4em';
            cssFormsInput[i].style.fontSize = '0.9em';
        }
        console.log('two ')
    }
    return headerPaddingRight;
}

window.addEventListener('resize' ,Responsividade)