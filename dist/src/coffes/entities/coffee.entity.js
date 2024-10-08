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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Coffee = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const flavor_entity_1 = require("./flavor.entity");
let Coffee = class Coffee {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, name: { required: true, type: () => String }, brand: { required: true, type: () => String }, recomendations: { required: true, type: () => Number }, flavors: { required: true, type: () => [require("./flavor.entity").Flavor] } };
    }
};
exports.Coffee = Coffee;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Coffee.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Coffee.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Coffee.prototype, "brand", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], Coffee.prototype, "recomendations", void 0);
__decorate([
    (0, typeorm_1.JoinTable)(),
    (0, typeorm_1.ManyToMany)((type) => flavor_entity_1.Flavor, (flavor) => flavor.coffees, {
        cascade: true,
    }),
    __metadata("design:type", Array)
], Coffee.prototype, "flavors", void 0);
exports.Coffee = Coffee = __decorate([
    (0, typeorm_1.Entity)()
], Coffee);
//# sourceMappingURL=coffee.entity.js.map