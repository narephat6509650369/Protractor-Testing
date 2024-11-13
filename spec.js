// spec.js
//6509650369
//ณรีพัฒน์ รุ่งรำพรรณ
describe('Protractor', function() {
    it('should have a title', function() {
        browser.ignoreSynchronization = true;
        browser.get('https://www.globalsqa.com/angularJs-protractor/ConsumptionCalculator/');
        expect(browser.getTitle()).toEqual('Consumption Calculator');
        browser.sleep(2000);
    });

    it('Test 1 coffee 98.5 mg and 7 ciggaretts 10.5 tar', async function() {
        //กาแฟ
        var formcof = element(by.css('form[data="{perUnit: 107.5, quantity: 0}"]'));
        browser.wait(ExpectedConditions.visibilityOf(formcof), 5000);

        const quantityInputCoffee = formcof.element(by.model('data.quantity'));
        const perUnitInputCoffee = formcof.element(by.model('data.perUnit'));
        
        // ใส่ข้อมูลสำหรับกาแฟ
        
        await quantityInputCoffee.sendKeys('1');
        await perUnitInputCoffee.clear();
        await perUnitInputCoffee.sendKeys('98.5');
        
        // ตรวจสอบค่า mg ของกาแฟ
        let coffeeResultText = await formcof.element(by.model('data.total')).getAttribute('value');
        expect(coffeeResultText).toEqual('99');
        if( coffeeResultText<=400){
            console.log('Coffee caffeine: ' + coffeeResultText + ' mg.');}
        if( coffeeResultText>400){
                console.log('Coffee caffeine: ' + coffeeResultText + ' mg.');
                console.log('You have exceeded the daily maximum intake of 400mg.');
            }
        //บุหรี่
        var formcig = element(by.css('form[data="{perUnit: 10, quantity: 0}"]'));
        browser.wait(ExpectedConditions.visibilityOf(formcig), 5000);
    
        const quantityInputCigarettes = formcig.element(by.model('data.quantity'));
        const perUnitInputCigarettes = formcig.element(by.model('data.perUnit'));
    
        // ใส่ข้อมูลสำหรับบุหรี่
        await quantityInputCigarettes.clear();
        await quantityInputCigarettes.sendKeys('7');
        await perUnitInputCigarettes.clear();
        await perUnitInputCigarettes.sendKeys('10.5');
        
        // รอสักครู่
        await browser.sleep(2000);
        
        // ตรวจสอบค่า mg ของบุหรี่
        let cigaretteResultText = await formcig.element(by.model('data.total')).getAttribute('value');
        expect(cigaretteResultText).toEqual('74');
        if(cigaretteResultText<=30){
        console.log('Cigarettes Tar: ' + cigaretteResultText + ' mg.');}
        if(cigaretteResultText>30){
            console.log('Cigarettes Tar: ' + cigaretteResultText + ' mg.');
            console.log('You have exceeded the daily maximum intake of 30mg.');
        }
          
    });
    
});
