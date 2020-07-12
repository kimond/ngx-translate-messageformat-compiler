import { __assign, __decorate, __extends, __param } from "tslib";
import { Inject, Injectable, Optional } from "@angular/core";
import { TranslateCompiler } from "@ngx-translate/core";
import * as MessageFormat from "messageformat";
import { defaultConfig, MESSAGE_FORMAT_CONFIG, } from "./message-format-config";
/**
 * This compiler expects ICU syntax and compiles the expressions with messageformat.js
 */
var TranslateMessageFormatCompiler = /** @class */ (function (_super) {
    __extends(TranslateMessageFormatCompiler, _super);
    function TranslateMessageFormatCompiler(config) {
        var _this = _super.call(this) || this;
        var _a = __assign(__assign({}, defaultConfig), config), locales = _a.locales, formatters = _a.formatters, biDiSupport = _a.biDiSupport, strictNumberSign = _a.strictNumberSign, disablePluralKeyChecks = _a.disablePluralKeyChecks;
        _this.messageFormat = new MessageFormat(locales);
        if (formatters) {
            _this.messageFormat.addFormatters(formatters);
        }
        if (biDiSupport) {
            _this.messageFormat.setBiDiSupport(biDiSupport);
        }
        if (strictNumberSign) {
            _this.messageFormat.setStrictNumberSign(strictNumberSign);
        }
        if (disablePluralKeyChecks) {
            _this.messageFormat.disablePluralKeyChecks();
        }
        return _this;
    }
    TranslateMessageFormatCompiler.prototype.compile = function (value, lang) {
        return this.messageFormat.compile(value, lang);
    };
    TranslateMessageFormatCompiler.prototype.compileTranslations = function (translations, lang) {
        return this.messageFormat.compile(translations, lang);
    };
    TranslateMessageFormatCompiler.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [MESSAGE_FORMAT_CONFIG,] }] }
    ]; };
    TranslateMessageFormatCompiler = __decorate([
        Injectable(),
        __param(0, Optional()),
        __param(0, Inject(MESSAGE_FORMAT_CONFIG))
    ], TranslateMessageFormatCompiler);
    return TranslateMessageFormatCompiler;
}(TranslateCompiler));
export { TranslateMessageFormatCompiler };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLW1lc3NhZ2UtZm9ybWF0LWNvbXBpbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXRyYW5zbGF0ZS1tZXNzYWdlZm9ybWF0LWNvbXBpbGVyLyIsInNvdXJjZXMiOlsibGliL3RyYW5zbGF0ZS1tZXNzYWdlLWZvcm1hdC1jb21waWxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3hELE9BQU8sS0FBSyxhQUFhLE1BQU0sZUFBZSxDQUFDO0FBQy9DLE9BQU8sRUFDTCxhQUFhLEVBRWIscUJBQXFCLEdBQ3RCLE1BQU0seUJBQXlCLENBQUM7QUFFakM7O0dBRUc7QUFFSDtJQUFvRCxrREFBaUI7SUFHbkUsd0NBR0UsTUFBNEI7UUFIOUIsWUFLRSxpQkFBTyxTQTJCUjtRQXpCTyxJQUFBLGtEQVNMLEVBUkMsb0JBQU8sRUFDUCwwQkFBVSxFQUNWLDRCQUFXLEVBQ1gsc0NBQWdCLEVBQ2hCLGtEQUlELENBQUM7UUFFRixLQUFJLENBQUMsYUFBYSxHQUFHLElBQUksYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRWhELElBQUksVUFBVSxFQUFFO1lBQ2QsS0FBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDOUM7UUFDRCxJQUFJLFdBQVcsRUFBRTtZQUNmLEtBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ2hEO1FBQ0QsSUFBSSxnQkFBZ0IsRUFBRTtZQUNwQixLQUFJLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLGdCQUFnQixDQUFDLENBQUM7U0FDMUQ7UUFDRCxJQUFJLHNCQUFzQixFQUFFO1lBQzFCLEtBQUksQ0FBQyxhQUFhLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztTQUM3Qzs7SUFDSCxDQUFDO0lBRU0sZ0RBQU8sR0FBZCxVQUFlLEtBQWEsRUFBRSxJQUFZO1FBQ3hDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFTSw0REFBbUIsR0FBMUIsVUFBMkIsWUFBaUIsRUFBRSxJQUFZO1FBQ3hELE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3hELENBQUM7O2dEQXZDRSxRQUFRLFlBQ1IsTUFBTSxTQUFDLHFCQUFxQjs7SUFMcEIsOEJBQThCO1FBRDFDLFVBQVUsRUFBRTtRQUtSLFdBQUEsUUFBUSxFQUFFLENBQUE7UUFDVixXQUFBLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFBO09BTHJCLDhCQUE4QixDQTRDMUM7SUFBRCxxQ0FBQztDQUFBLEFBNUNELENBQW9ELGlCQUFpQixHQTRDcEU7U0E1Q1ksOEJBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBPcHRpb25hbCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBUcmFuc2xhdGVDb21waWxlciB9IGZyb20gXCJAbmd4LXRyYW5zbGF0ZS9jb3JlXCI7XG5pbXBvcnQgKiBhcyBNZXNzYWdlRm9ybWF0IGZyb20gXCJtZXNzYWdlZm9ybWF0XCI7XG5pbXBvcnQge1xuICBkZWZhdWx0Q29uZmlnLFxuICBNZXNzYWdlRm9ybWF0Q29uZmlnLFxuICBNRVNTQUdFX0ZPUk1BVF9DT05GSUcsXG59IGZyb20gXCIuL21lc3NhZ2UtZm9ybWF0LWNvbmZpZ1wiO1xuXG4vKipcbiAqIFRoaXMgY29tcGlsZXIgZXhwZWN0cyBJQ1Ugc3ludGF4IGFuZCBjb21waWxlcyB0aGUgZXhwcmVzc2lvbnMgd2l0aCBtZXNzYWdlZm9ybWF0LmpzXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUcmFuc2xhdGVNZXNzYWdlRm9ybWF0Q29tcGlsZXIgZXh0ZW5kcyBUcmFuc2xhdGVDb21waWxlciB7XG4gIHByaXZhdGUgbWVzc2FnZUZvcm1hdDogTWVzc2FnZUZvcm1hdDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKVxuICAgIEBJbmplY3QoTUVTU0FHRV9GT1JNQVRfQ09ORklHKVxuICAgIGNvbmZpZz86IE1lc3NhZ2VGb3JtYXRDb25maWdcbiAgKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIGNvbnN0IHtcbiAgICAgIGxvY2FsZXMsXG4gICAgICBmb3JtYXR0ZXJzLFxuICAgICAgYmlEaVN1cHBvcnQsXG4gICAgICBzdHJpY3ROdW1iZXJTaWduLFxuICAgICAgZGlzYWJsZVBsdXJhbEtleUNoZWNrcyxcbiAgICB9ID0ge1xuICAgICAgLi4uZGVmYXVsdENvbmZpZyxcbiAgICAgIC4uLmNvbmZpZyxcbiAgICB9O1xuXG4gICAgdGhpcy5tZXNzYWdlRm9ybWF0ID0gbmV3IE1lc3NhZ2VGb3JtYXQobG9jYWxlcyk7XG5cbiAgICBpZiAoZm9ybWF0dGVycykge1xuICAgICAgdGhpcy5tZXNzYWdlRm9ybWF0LmFkZEZvcm1hdHRlcnMoZm9ybWF0dGVycyk7XG4gICAgfVxuICAgIGlmIChiaURpU3VwcG9ydCkge1xuICAgICAgdGhpcy5tZXNzYWdlRm9ybWF0LnNldEJpRGlTdXBwb3J0KGJpRGlTdXBwb3J0KTtcbiAgICB9XG4gICAgaWYgKHN0cmljdE51bWJlclNpZ24pIHtcbiAgICAgIHRoaXMubWVzc2FnZUZvcm1hdC5zZXRTdHJpY3ROdW1iZXJTaWduKHN0cmljdE51bWJlclNpZ24pO1xuICAgIH1cbiAgICBpZiAoZGlzYWJsZVBsdXJhbEtleUNoZWNrcykge1xuICAgICAgdGhpcy5tZXNzYWdlRm9ybWF0LmRpc2FibGVQbHVyYWxLZXlDaGVja3MoKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgY29tcGlsZSh2YWx1ZTogc3RyaW5nLCBsYW5nOiBzdHJpbmcpOiAocGFyYW1zOiBhbnkpID0+IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMubWVzc2FnZUZvcm1hdC5jb21waWxlKHZhbHVlLCBsYW5nKTtcbiAgfVxuXG4gIHB1YmxpYyBjb21waWxlVHJhbnNsYXRpb25zKHRyYW5zbGF0aW9uczogYW55LCBsYW5nOiBzdHJpbmcpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLm1lc3NhZ2VGb3JtYXQuY29tcGlsZSh0cmFuc2xhdGlvbnMsIGxhbmcpO1xuICB9XG59XG4iXX0=