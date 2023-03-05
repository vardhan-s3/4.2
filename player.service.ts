import { Injectable } from '@angular/core';
import { Player } from '../models/player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private players: Player[] = [
    { id: 1, name: 'Lionel Messi', position: 'Forward', age: 34 },
    { id: 2, name: 'Cristiano Ronaldo', position: 'Forward', age: 36 },
    { id: 3, name: 'Neymar Jr', position: 'Forward', age: 29 },
    { id: 4, name: 'Kylian Mbappé', position: 'Forward', age: 22 }
  ];

  getPlayers(): Player[] {
    return this.players;
  }

  addPlayer(player: Player) {
    player.id = this.players.length + 1;
    this.players.push(player);
  }

  deletePlayer(id: number) {
    const index = this.players.findIndex(p => p.id === id);
    if (index !== -1) {
      this.players.splice(index
