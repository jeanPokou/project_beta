define(['exports', 'module', 'knockout', 'crossroads', 'hasher'], function (exports, module, _knockout, _crossroads, _hasher) {
    'use strict';

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    var _ko = _interopRequireDefault(_knockout);

    var _crossroads2 = _interopRequireDefault(_crossroads);

    var _hasher2 = _interopRequireDefault(_hasher);

    // This module configures crossroads.js, a routing library. If you prefer, you
    // can use any other routing library (or none at all) as Knockout is designed to
    // compose cleanly with external libraries.
    //
    // You *don't* have to follow the pattern established here (each route entry
    // specifies a 'page', which is a Knockout component) - there's nothing built into
    // Knockout that requires or even knows about this technique. It's just one of
    // many possible ways of setting up client-side routes.

    var Router = function Router(config) {
        var _this = this;

        _classCallCheck(this, Router);

        this.currentRoute = _ko['default'].observable({});

        // Configure Crossroads route handlers
        _ko['default'].utils.arrayForEach(config.routes, function (route) {
            _crossroads2['default'].addRoute(route.url, function (requestParams) {
                _this.currentRoute(_ko['default'].utils.extend(requestParams, route.params));
            });
        });

        // Activate Crossroads
        _crossroads2['default'].normalizeFn = _crossroads2['default'].NORM_AS_OBJECT;
        _hasher2['default'].initialized.add(function (hash) {
            return _crossroads2['default'].parse(hash);
        });
        _hasher2['default'].changed.add(function (hash) {
            return _crossroads2['default'].parse(hash);
        });
        _hasher2['default'].init();
    }

    // Create and export router instance
    ;

    var routerInstance = new Router({
        routes: [{ url: '', params: { page: 'home-page' } }, { url: 'about', params: { page: 'about-page' } }]
    });

    module.exports = routerInstance;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9zb3VyY2UvYXBwL3JvdXRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBYU0sTUFBTSxHQUNHLFNBRFQsTUFBTSxDQUNJLE1BQU0sRUFBRTs7OzhCQURsQixNQUFNOztBQUVKLFlBQUksQ0FBQyxZQUFZLEdBQUcsZUFBRyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7OztBQUd0Qyx1QkFBRyxLQUFLLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsVUFBQyxLQUFLLEVBQUs7QUFDNUMsb0NBQVcsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsVUFBQyxhQUFhLEVBQUs7QUFDOUMsc0JBQUssWUFBWSxDQUFDLGVBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7YUFDbkUsQ0FBQyxDQUFDO1NBQ04sQ0FBQyxDQUFDOzs7QUFHSCxnQ0FBVyxXQUFXLEdBQUcsd0JBQVcsY0FBYyxDQUFDO0FBQ25ELDRCQUFPLFdBQVcsQ0FBQyxHQUFHLENBQUMsVUFBQSxJQUFJO21CQUFJLHdCQUFXLEtBQUssQ0FBQyxJQUFJLENBQUM7U0FBQSxDQUFDLENBQUM7QUFDdkQsNEJBQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFBLElBQUk7bUJBQUksd0JBQVcsS0FBSyxDQUFDLElBQUksQ0FBQztTQUFBLENBQUMsQ0FBQztBQUNuRCw0QkFBTyxJQUFJLEVBQUUsQ0FBQztLQUNqQjs7Ozs7QUFJTCxRQUFJLGNBQWMsR0FBRyxJQUFJLE1BQU0sQ0FBQztBQUM1QixjQUFNLEVBQUUsQ0FDSixFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQVcsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxFQUFFLEVBQ25ELEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBTSxNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLEVBQUUsQ0FDdkQ7S0FDSixDQUFDLENBQUM7O3FCQUVZLGNBQWMiLCJmaWxlIjoic3JjL2FwcC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQga28gZnJvbSAna25vY2tvdXQnO1xuaW1wb3J0IGNyb3Nzcm9hZHMgZnJvbSAnY3Jvc3Nyb2Fkcyc7XG5pbXBvcnQgaGFzaGVyIGZyb20gJ2hhc2hlcic7XG5cbi8vIFRoaXMgbW9kdWxlIGNvbmZpZ3VyZXMgY3Jvc3Nyb2Fkcy5qcywgYSByb3V0aW5nIGxpYnJhcnkuIElmIHlvdSBwcmVmZXIsIHlvdVxuLy8gY2FuIHVzZSBhbnkgb3RoZXIgcm91dGluZyBsaWJyYXJ5IChvciBub25lIGF0IGFsbCkgYXMgS25vY2tvdXQgaXMgZGVzaWduZWQgdG9cbi8vIGNvbXBvc2UgY2xlYW5seSB3aXRoIGV4dGVybmFsIGxpYnJhcmllcy5cbi8vXG4vLyBZb3UgKmRvbid0KiBoYXZlIHRvIGZvbGxvdyB0aGUgcGF0dGVybiBlc3RhYmxpc2hlZCBoZXJlIChlYWNoIHJvdXRlIGVudHJ5XG4vLyBzcGVjaWZpZXMgYSAncGFnZScsIHdoaWNoIGlzIGEgS25vY2tvdXQgY29tcG9uZW50KSAtIHRoZXJlJ3Mgbm90aGluZyBidWlsdCBpbnRvXG4vLyBLbm9ja291dCB0aGF0IHJlcXVpcmVzIG9yIGV2ZW4ga25vd3MgYWJvdXQgdGhpcyB0ZWNobmlxdWUuIEl0J3MganVzdCBvbmUgb2Zcbi8vIG1hbnkgcG9zc2libGUgd2F5cyBvZiBzZXR0aW5nIHVwIGNsaWVudC1zaWRlIHJvdXRlcy5cblxuY2xhc3MgUm91dGVyIHtcbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50Um91dGUgPSBrby5vYnNlcnZhYmxlKHt9KTtcbiAgICBcbiAgICAgICAgLy8gQ29uZmlndXJlIENyb3Nzcm9hZHMgcm91dGUgaGFuZGxlcnNcbiAgICAgICAga28udXRpbHMuYXJyYXlGb3JFYWNoKGNvbmZpZy5yb3V0ZXMsIChyb3V0ZSkgPT4ge1xuICAgICAgICAgICAgY3Jvc3Nyb2Fkcy5hZGRSb3V0ZShyb3V0ZS51cmwsIChyZXF1ZXN0UGFyYW1zKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50Um91dGUoa28udXRpbHMuZXh0ZW5kKHJlcXVlc3RQYXJhbXMsIHJvdXRlLnBhcmFtcykpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIFxuICAgICAgICAvLyBBY3RpdmF0ZSBDcm9zc3JvYWRzXG4gICAgICAgIGNyb3Nzcm9hZHMubm9ybWFsaXplRm4gPSBjcm9zc3JvYWRzLk5PUk1fQVNfT0JKRUNUO1xuICAgICAgICBoYXNoZXIuaW5pdGlhbGl6ZWQuYWRkKGhhc2ggPT4gY3Jvc3Nyb2Fkcy5wYXJzZShoYXNoKSk7XG4gICAgICAgIGhhc2hlci5jaGFuZ2VkLmFkZChoYXNoID0+IGNyb3Nzcm9hZHMucGFyc2UoaGFzaCkpO1xuICAgICAgICBoYXNoZXIuaW5pdCgpO1xuICAgIH1cbn1cblxuLy8gQ3JlYXRlIGFuZCBleHBvcnQgcm91dGVyIGluc3RhbmNlXG52YXIgcm91dGVySW5zdGFuY2UgPSBuZXcgUm91dGVyKHtcbiAgICByb3V0ZXM6IFtcbiAgICAgICAgeyB1cmw6ICcnLCAgICAgICAgICBwYXJhbXM6IHsgcGFnZTogJ2hvbWUtcGFnZScgfSB9LFxuICAgICAgICB7IHVybDogJ2Fib3V0JywgICAgIHBhcmFtczogeyBwYWdlOiAnYWJvdXQtcGFnZScgfSB9XG4gICAgXVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlckluc3RhbmNlO1xuIl19