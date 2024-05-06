function skillsMember() {
    return {
        restrict: 'E',
        templateUrl: 'modlues/skills/views/member.html',
        controller: 'SkillsMemberController',
        controllerAs: 'vm',
        bindToController: true,
        scope: {
            member: '='
        }
    }
}