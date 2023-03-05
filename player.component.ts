import { Component, OnInit } from '@angular/core';
import { Player } from '../models/player';
import { PlayerService } from '../services/player.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  players: Player[];
  editingPlayer: Player;

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.players = this.playerService.getPlayers();
  }

  addPlayer(name: string, position: string, age: number) {
    const player: Player = { id: 0, name, position, age };
    this.playerService.addPlayer(player);
  }

  deletePlayer(id: number) {
    this.playerService.deletePlayer(id);
  }

  editPlayer(player: Player) {
    this.editingPlayer = { ...player };
  }

  updatePlayer(id: number, name: string, position: string, age: number) {
    const player: Player = { id, name, position, age };
    this.playerService.updatePlayer(player);
    this.editingPlayer = null;
  }

  cancelEdit() {
    this.editingPlayer = null;
  }
}
}

updatePlayer(player: Player) {
const index = this.players.findIndex(p => p.id === player.id);
if (index !== -1) {
this.players[index] = { ...player };
}
}
}