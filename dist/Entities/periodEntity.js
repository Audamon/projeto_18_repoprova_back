"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var typeorm_1 = require("typeorm");
var subjectEntity_1 = __importDefault(require("./subjectEntity"));
var PeriodEntity = /** @class */ (function () {
    function PeriodEntity() {
    }
    PeriodEntity.prototype.getId = function () {
        return this.id;
    };
    PeriodEntity.prototype.getPeriod = function () {
        return {
            id: this.id,
            name: this.name
        };
    };
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], PeriodEntity.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], PeriodEntity.prototype, "name");
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return subjectEntity_1["default"]; }, function (subject) { return subject.period; }),
        __metadata("design:type", subjectEntity_1["default"])
    ], PeriodEntity.prototype, "subjects");
    PeriodEntity = __decorate([
        (0, typeorm_1.Entity)('period')
    ], PeriodEntity);
    return PeriodEntity;
}());
exports["default"] = PeriodEntity;
