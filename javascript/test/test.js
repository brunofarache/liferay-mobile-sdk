var should = require('should'),
	Session = require('../lib/session'),
	GroupService = require('../lib/v62/group');

describe('GroupService', function() {
	var session = new Session('http://localhost:8080', 'test@liferay.com', 'test'),
		groupService = new GroupService();

	describe('#getUserSites()', function() {
		var command = groupService.getUserSites();

		it('should have /group/get-user-sites property', function() {
			command.should.have.property('/group/get-user-sites');
		});

		it('should return at least one site called Guest', function(done) {
			session.invoke(command, function(err, sites) {
				if (err) {
					throw err;
				}

				sites.should.containDeep([{ 'name': 'Guest' }]);
				done();
			});
		});
	});
});