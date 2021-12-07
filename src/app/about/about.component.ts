import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

declare var data : any;

@Component({
	selector: 'app-about',
	templateUrl: './about.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {
	public aboutData = data["About"];
	public activeTab = "story";

	constructor() { }

  	ngOnInit(): void {}
}
