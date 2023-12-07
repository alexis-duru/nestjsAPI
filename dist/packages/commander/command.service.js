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
exports.CommandService = void 0;
const common_1 = require("@nestjs/common");
const fs_1 = require("./fs");
const commander = require("commander");
let CommandService = class CommandService {
    constructor() {
        this.initializeCommander();
    }
    initializeCommander() {
        const program = new commander.Command();
        program
            .option("--filepath <valeur>", "Spécifiez le fichier à convertir")
            .option("--fileout <valeur>", "Spécifiez le fichier de sortie (optionnel)");
        program.parse(process.argv);
        const options = program.opts();
        if (options.filepath) {
            (0, fs_1.createDocument)(options.filepath, options.fileout);
        }
        else {
            console.error("Le paramètre filepath est obligatoire. Utilisez --filepath pour spécifier le fichier à convertir.");
        }
    }
};
CommandService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], CommandService);
exports.CommandService = CommandService;
//# sourceMappingURL=command.service.js.map