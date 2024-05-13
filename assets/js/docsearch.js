import docsearch from '@docsearch/js';

docsearch({
    container: '#docsearch',
    appId: 'KMWY81ZWS3',
    indexName: 'getdoks',
    apiKey: '691951526b11e1a708258e4e1a51adc7',
    insights: true
});

const onClick = function () {
    document.getElementsByClassName('DocSearch-Button')[0].click();
};

document.getElementById('searchToggleMobile').onclick = onClick;
document.getElementById('searchToggleDesktop').onclick = onClick;
