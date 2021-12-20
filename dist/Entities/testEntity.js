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
var professorEntity_1 = __importDefault(require("./professorEntity"));
var subjectEntity_1 = __importDefault(require("./subjectEntity"));
var TestEntity = /** @class */ (function () {
    function TestEntity() {
    }
    TestEntity.prototype.getTestsByProfessor = function () {
        return {
            id: this.id,
            name: this.name,
            type: this.type,
            url: this.url,
            professor: {
                name: this.professor.name
            },
            subject: {
                name: this.subject.name,
                period: this.subject.period.name
            }
        };
    };
    TestEntity.prototype.getTestsBySubject = function () {
        return {
            id: this.id,
            name: this.name,
            type: this.type,
            url: this.url,
            professor: {
                name: this.professor.name
            },
            subject: {
                name: this.subject.name,
                period: this.subject.period.name
            }
        };
    };
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], TestEntity.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Number)
    ], TestEntity.prototype, "idUser");
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], TestEntity.prototype, "name");
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], TestEntity.prototype, "type");
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Number)
    ], TestEntity.prototype, "idSubject");
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Number)
    ], TestEntity.prototype, "idProfessor");
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], TestEntity.prototype, "url");
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], TestEntity.prototype, "pdf");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return professorEntity_1["default"]; }, function (professor) { return professor.id; }, {
            eager: true
        }),
        (0, typeorm_1.JoinColumn)({ name: 'idProfessor' }),
        __metadata("design:type", professorEntity_1["default"])
    ], TestEntity.prototype, "professor");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return subjectEntity_1["default"]; }, function (subject) { return subject.id; }, {
            eager: true
        }),
        (0, typeorm_1.JoinColumn)({ name: 'idSubject' }),
        __metadata("design:type", subjectEntity_1["default"])
    ], TestEntity.prototype, "subject");
    TestEntity = __decorate([
        (0, typeorm_1.Entity)('test')
    ], TestEntity);
    return TestEntity;
}());
exports["default"] = TestEntity;
