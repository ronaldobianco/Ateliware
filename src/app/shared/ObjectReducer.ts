import { Injectable } from '@angular/core';
import { Repository } from '../core/services/models/repository.model';

@Injectable({
    providedIn: 'root',
  })
  export class ObjectReducer {
    reducePayload(data: any): Repository {
        const payload ={
                name:data.full_name,
                img_url:data.owner.avatar_url,
                ownerName:data.owner.login,
                language:data.language,
                repositoryID: data.id,
                url: data.html_url
            };
        return payload;
    }
  }
