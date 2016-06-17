define(['exports', 'module', 'knockout', 'text!./nav-bar.html'], function (exports, module, _knockout, _textNavBarHtml) {
    'use strict';

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    var _ko = _interopRequireDefault(_knockout);

    var _template = _interopRequireDefault(_textNavBarHtml);

    var NavBarViewModel = function NavBarViewModel(params) {
        _classCallCheck(this, NavBarViewModel);

        // This viewmodel doesn't do anything except pass through the 'route' parameter to the view.
        // You could remove this viewmodel entirely, and define 'nav-bar' as a template-only component.
        // But in most apps, you'll want some viewmodel logic to determine what navigation options appear.
        this.route = params.route;
    };

    module.exports = { viewModel: NavBarViewModel, template: _template['default'] };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9zb3VyY2UvY29tcG9uZW50cy9uYXYtYmFyL25hdi1iYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7UUFHTSxlQUFlLEdBQ04sU0FEVCxlQUFlLENBQ0wsTUFBTSxFQUFFOzhCQURsQixlQUFlOzs7OztBQUtiLFlBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztLQUM3Qjs7cUJBR1UsRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFLFFBQVEsc0JBQVUsRUFBRSIsImZpbGUiOiJzcmMvY29tcG9uZW50cy9uYXYtYmFyL25hdi1iYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQga28gZnJvbSAna25vY2tvdXQnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJ3RleHQhLi9uYXYtYmFyLmh0bWwnO1xuXG5jbGFzcyBOYXZCYXJWaWV3TW9kZWwge1xuICAgIGNvbnN0cnVjdG9yKHBhcmFtcykge1xuICAgICAgICAvLyBUaGlzIHZpZXdtb2RlbCBkb2Vzbid0IGRvIGFueXRoaW5nIGV4Y2VwdCBwYXNzIHRocm91Z2ggdGhlICdyb3V0ZScgcGFyYW1ldGVyIHRvIHRoZSB2aWV3LlxuICAgICAgICAvLyBZb3UgY291bGQgcmVtb3ZlIHRoaXMgdmlld21vZGVsIGVudGlyZWx5LCBhbmQgZGVmaW5lICduYXYtYmFyJyBhcyBhIHRlbXBsYXRlLW9ubHkgY29tcG9uZW50LlxuICAgICAgICAvLyBCdXQgaW4gbW9zdCBhcHBzLCB5b3UnbGwgd2FudCBzb21lIHZpZXdtb2RlbCBsb2dpYyB0byBkZXRlcm1pbmUgd2hhdCBuYXZpZ2F0aW9uIG9wdGlvbnMgYXBwZWFyLlxuICAgICAgICB0aGlzLnJvdXRlID0gcGFyYW1zLnJvdXRlOyAgICAgICAgXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7IHZpZXdNb2RlbDogTmF2QmFyVmlld01vZGVsLCB0ZW1wbGF0ZTogdGVtcGxhdGUgfTsiXX0=