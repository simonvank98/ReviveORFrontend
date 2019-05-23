import {Injectable} from '@angular/core';
import {TradeInProcessContainer} from './trade-in-process-container.model';
import {ORProduct} from 'src/app/shared/services/or-product/or-product.model';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class TradeInProcessService {

    emptyContainer: TradeInProcessContainer;
    tradeInProcessContainer: TradeInProcessContainer = {
        currentStep: 0,
        estimatedCredit: 0,
        jewelryType: '',
        jewelryMaterial: '',
        jewelryPiece: {},
        selectedProperty: '',
        storyTitle: '',
        storyContent: '',
        images: [],
        additionalNotes: '',

        jewelryCondition: {
            missingPiece: false,
            scratched: false,
            bent: false,
            broken: false
        }
    };

    constructor(private http: HttpClient) {
        this.emptyContainer = JSON.parse(JSON.stringify(this.tradeInProcessContainer));
        localStorage.emptyContainer = JSON.stringify(this.emptyContainer);

        if (localStorage.getItem('tradeInProcessContainer') !== null) {
            this.tradeInProcessContainer = JSON.parse(localStorage.getItem('tradeInProcessContainer'));
        }
    }

    submitRequest(tradeInRequest) {
        return this.http.post(`${environment.reviveORAPIUrl}tradeinrequests`, tradeInRequest);
    }

    setCurrentStep(step) {
        setTimeout(() => {
            this.tradeInProcessContainer.currentStep = step;
            this.storeContainer();
        });
    }

    hasCondition() {
        return this.hasMissing() && this.hasScratched && this.hasBent && this.hasBroken();
    }

    getCondition() {
        return {'Missing': this.getMissing(), 'Scratched': this.getScratched(), 'Bent': this.getBent(), 'Broken': this.getBroken()};
    }

    hasProperty() {
        return this.tradeInProcessContainer.selectedProperty.length > 0;
    }

    getProperty() {
        return this.tradeInProcessContainer.selectedProperty;
    }

    setProperty(property) {
        this.tradeInProcessContainer.selectedProperty = property;
        this.storeContainer();
    }

    hasMissing() {
        return this.tradeInProcessContainer.jewelryCondition.missingPiece !== null;
    }

    getMissing() {
        return this.tradeInProcessContainer.jewelryCondition.missingPiece;
    }

    setMissing(missing) {
        this.tradeInProcessContainer.jewelryCondition.missingPiece = missing;
        this.storeContainer();
    }

    hasScratched() {
        return this.tradeInProcessContainer.jewelryCondition.scratched !== null;
    }

    getScratched() {
        return this.tradeInProcessContainer.jewelryCondition.scratched;
    }

    setScratched(scratched) {
        this.tradeInProcessContainer.jewelryCondition.scratched = scratched;
        this.storeContainer();
    }

    hasBent() {
        return this.tradeInProcessContainer.jewelryCondition.bent !== null;
    }

    getBent() {
        return this.tradeInProcessContainer.jewelryCondition.bent;
    }

    setBent(bent) {
        this.tradeInProcessContainer.jewelryCondition.bent = bent;
        this.storeContainer();
    }

    hasBroken() {
        return this.tradeInProcessContainer.jewelryCondition.broken !== null;
    }

    getBroken() {
        return this.tradeInProcessContainer.jewelryCondition.broken;
    }

    setBroken(broken) {
        this.tradeInProcessContainer.jewelryCondition.broken = broken;
        this.storeContainer();
    }

    hasType() {
        return this.tradeInProcessContainer.jewelryType.length > 0;
    }

    getType() {
        return this.tradeInProcessContainer.jewelryType;
    }

    setType(type: string) {
        this.tradeInProcessContainer.jewelryType = type;
        this.storeContainer();
    }

    hasMaterial() {
        return this.tradeInProcessContainer.jewelryMaterial.length > 0;
    }

    getMaterial() {
        return this.tradeInProcessContainer.jewelryMaterial;
    }

    setMaterial(material: string) {
        this.tradeInProcessContainer.jewelryMaterial = material;
        this.storeContainer();
    }

    hasPiece() {
        return Object.entries(this.tradeInProcessContainer.jewelryPiece).length !== 0 &&
            this.tradeInProcessContainer.jewelryPiece.constructor === Object;
    }

    getPiece() {
        return this.tradeInProcessContainer.jewelryPiece;
    }

    setPiece(piece: ORProduct) {
        this.tradeInProcessContainer.jewelryPiece = piece;
        this.storeContainer();
    }


    hasImages() {
        return this.tradeInProcessContainer.images.length > 0;
    }

    getImages() {
        return this.tradeInProcessContainer.images;
    }

    setImages(images) {
        this.tradeInProcessContainer.images = images;
        this.storeContainer();
    }

    hasEstimatedCredit() {
        return this.tradeInProcessContainer.estimatedCredit > 0;
    }

    getEstimatedCredit() {
        return this.tradeInProcessContainer.estimatedCredit;
    }

    setEstimatedCredit(estimatedCredit) {
        this.tradeInProcessContainer.estimatedCredit = estimatedCredit;
        this.storeContainer();
    }


    hasStoryTitle() {
        return this.tradeInProcessContainer.storyTitle.length > 0;
    }

    getStoryTitle() {
        return this.tradeInProcessContainer.storyTitle;
    }

    setStoryTitle(storyTitle) {
        this.tradeInProcessContainer.storyTitle = storyTitle;
        this.storeContainer();
    }

    hasStoryContent() {
        return this.tradeInProcessContainer.storyContent.length > 0;
    }

    getStoryContent() {
        return this.tradeInProcessContainer.storyContent;
    }

    setStoryContent(storyContent) {
        this.tradeInProcessContainer.storyContent = storyContent;
        this.storeContainer();
    }

    hasAdditionalNotes() {
        return this.tradeInProcessContainer.additionalNotes.length > 0;
    }

    getAdditionalNotes() {
        return this.tradeInProcessContainer.additionalNotes;
    }

    setAdditionalNotes(additionalNotes) {
        this.tradeInProcessContainer.additionalNotes = additionalNotes;
        this.storeContainer();
    }

    reset() {
        this.tradeInProcessContainer = JSON.parse(JSON.stringify(this.emptyContainer));
        localStorage.removeItem('tradeInProcessContainer');
    }

    storeContainer() {
        localStorage.tradeInProcessContainer = JSON.stringify(this.tradeInProcessContainer);
    }
}
