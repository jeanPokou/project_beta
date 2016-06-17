define(['exports', 'jquery', 'bootstrap', 'knockout', 'knockout-projections', './router', 'forerunner'], function (exports, _jquery, _bootstrap, _knockout, _knockoutProjections, _router, _forerunner) {
    'use strict';

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    var _ko = _interopRequireDefault(_knockout);

    // creating the Forerunner Data Base

    var fdb = new ForerunnerDB();
    var db = fdb.db("myDatabaseName");
    var itemCollection = db.collection("item");

    // Components can be packaged as AMD modules, such as the following:
    _ko['default'].components.register('nav-bar', { require: 'components/nav-bar/nav-bar' });
    _ko['default'].components.register('home-page', { require: 'components/home-page/home' });

    // ... or for template-only components, you can just point to a .html file directly:
    _ko['default'].components.register('about-page', {
        template: { require: 'text!components/about-page/about.html' }
    });

    // [Scaffolded component registrations will be inserted here. To retain this feature, don't remove this comment.]

    // Start the application
    _ko['default'].applyBindings({ route: _router.currentRoute });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9zb3VyY2UvYXBwL3N0YXJ0dXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBVUEsUUFBSSxHQUFHLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztBQUM3QixRQUFJLEVBQUUsR0FBRyxHQUFHLENBQUMsRUFBRSxDQUFDLGdCQUFnQixDQUFDLENBQUM7QUFDbEMsUUFBSSxjQUFjLEdBQUcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQzs7O0FBRzNDLG1CQUFHLFVBQVUsQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLEVBQUUsT0FBTyxFQUFFLDRCQUE0QixFQUFFLENBQUMsQ0FBQztBQUM3RSxtQkFBRyxVQUFVLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxFQUFFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxDQUFDLENBQUM7OztBQUc5RSxtQkFBRyxVQUFVLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRTtBQUNqQyxnQkFBUSxFQUFFLEVBQUUsT0FBTyxFQUFFLHVDQUF1QyxFQUFFO0tBQ2pFLENBQUMsQ0FBQzs7Ozs7QUFLSCxtQkFBRyxhQUFhLENBQUMsRUFBRSxLQUFLLEVBQUUsUUFBTyxZQUFZLEVBQUUsQ0FBQyxDQUFDIiwiZmlsZSI6InNyYy9hcHAvc3RhcnR1cC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnanF1ZXJ5JztcbmltcG9ydCAnYm9vdHN0cmFwJztcbmltcG9ydCBrbyBmcm9tICdrbm9ja291dCc7XG5pbXBvcnQgJ2tub2Nrb3V0LXByb2plY3Rpb25zJ1xuaW1wb3J0ICogYXMgcm91dGVyIGZyb20gJy4vcm91dGVyJztcbmltcG9ydCAgJ2ZvcmVydW5uZXInO1xuXG5cbi8vIGNyZWF0aW5nIHRoZSBGb3JlcnVubmVyIERhdGEgQmFzZVxuXG52YXIgZmRiID0gbmV3IEZvcmVydW5uZXJEQigpO1xudmFyIGRiID0gZmRiLmRiKFwibXlEYXRhYmFzZU5hbWVcIik7XG52YXIgaXRlbUNvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKFwiaXRlbVwiKTtcblxuLy8gQ29tcG9uZW50cyBjYW4gYmUgcGFja2FnZWQgYXMgQU1EIG1vZHVsZXMsIHN1Y2ggYXMgdGhlIGZvbGxvd2luZzpcbmtvLmNvbXBvbmVudHMucmVnaXN0ZXIoJ25hdi1iYXInLCB7IHJlcXVpcmU6ICdjb21wb25lbnRzL25hdi1iYXIvbmF2LWJhcicgfSk7XG5rby5jb21wb25lbnRzLnJlZ2lzdGVyKCdob21lLXBhZ2UnLCB7IHJlcXVpcmU6ICdjb21wb25lbnRzL2hvbWUtcGFnZS9ob21lJyB9KTtcblxuLy8gLi4uIG9yIGZvciB0ZW1wbGF0ZS1vbmx5IGNvbXBvbmVudHMsIHlvdSBjYW4ganVzdCBwb2ludCB0byBhIC5odG1sIGZpbGUgZGlyZWN0bHk6XG5rby5jb21wb25lbnRzLnJlZ2lzdGVyKCdhYm91dC1wYWdlJywge1xuICAgIHRlbXBsYXRlOiB7IHJlcXVpcmU6ICd0ZXh0IWNvbXBvbmVudHMvYWJvdXQtcGFnZS9hYm91dC5odG1sJyB9XG59KTtcblxuLy8gW1NjYWZmb2xkZWQgY29tcG9uZW50IHJlZ2lzdHJhdGlvbnMgd2lsbCBiZSBpbnNlcnRlZCBoZXJlLiBUbyByZXRhaW4gdGhpcyBmZWF0dXJlLCBkb24ndCByZW1vdmUgdGhpcyBjb21tZW50Ll1cblxuLy8gU3RhcnQgdGhlIGFwcGxpY2F0aW9uXG5rby5hcHBseUJpbmRpbmdzKHsgcm91dGU6IHJvdXRlci5jdXJyZW50Um91dGUgfSk7XG4iXX0=