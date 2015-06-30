describe('Assembled avengers list', function() {
    var $compile,
        $rootScope,
        assemblyService,
		abilityService;

    beforeEach(module('avengers.assembly'));
    beforeEach(module('avengers.ability'));

    beforeEach(inject(function(_$compile_, _$rootScope_, Assembly, Ability){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $compile = _$compile_;
        $rootScope = _$rootScope_;
        assemblyService = Assembly;
        abilityService = Ability;
    }));

    it('has sane environment', function() {
        var element = $compile('<div>{{1+2}}</div>')($rootScope);

        $rootScope.$digest();
        expect(element.html()).toContain("3");
    });

    it('has a header', function() {
        var element = $compile('<div assembled-avengers></div>')($rootScope);

        $rootScope.$digest();
        expect(element.find('h4').text()).toContain("Avengers! Who is assembled?");
    });

    it('has no avengers by default', function() {
        var element = $compile('<div assembled-avengers></div>')($rootScope);

        $rootScope.$digest();
        expect(element.html()).toContain("No one");
    });

    it('displays the list of avengers from the service', function() {
        assemblyService.assemblyAvenger({'name': 'Hulk'});
        var element = $compile('<div assembled-avengers></div>')($rootScope);
        $rootScope.$digest();
        expect(element.html()).toContain("Hulk");
    });

    it('displays will update the list of avengers', function() {
        var element = $compile('<div assembled-avengers></div>')($rootScope);
        $rootScope.$digest();
        expect(element.html()).not.toContain("Hulk");
        assemblyService.assemblyAvenger({'name': 'Hulk'});
        $rootScope.$digest();
        expect(element.html()).toContain("Hulk");
		assemblyService.disassemblyAvenger({'name': 'Hulk'});
        $rootScope.$digest();
        expect(element.html()).not.toContain("Hulk");
    });
	
	it('show abilities', function() {
		var element = $compile('<div avenger-abilities></div>')($rootScope);
        $rootScope.$digest();
		expect(element.html()).not.toContain('Super power');
		abilityService.showAbilities({'abilities': ['Super power', 'More Super Power!']});
		$rootScope.$digest();
		expect(element.html()).toContain('Super power');
    });
	
});